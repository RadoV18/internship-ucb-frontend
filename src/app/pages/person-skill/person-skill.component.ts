import { Component } from '@angular/core';
import { SkillDto } from 'src/app/dto/SkillDto';
import { PersonSkillDto } from 'src/app/dto/person.skill.dto';
import { PersonSkillService } from 'src/app/services/person-skill.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-person-skill',
  templateUrl: './person-skill.component.html',
  styleUrls: ['./person-skill.component.css']
})
export class PersonSkillComponent {
  show: boolean = false;
  personSkills: PersonSkillDto[] | undefined;
  personSkill = {} as PersonSkillDto;

  skills: SkillDto[] | undefined;

  displayModal: boolean = false;
  productSearchText = '';

  constructor(private personSkillService: PersonSkillService, private skillService: SkillService) {

  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit() {
    // Hard coded personId
    this.personSkillService.getPersonSkills(1).subscribe((data: PersonSkillDto[]) => {
      this.personSkills = data;
      console.log(data);
    });

    this.skillService.getSkills().subscribe((data: SkillDto[]) => {
      this.skills = data;
      console.log(data);
    });
  }

  saveSkill() {
    // Hard coded personId
    this.personSkill.personId = 1;
    if (this.personSkill.personId === undefined || this.personSkill.skillId === undefined) {
      alert("Select an skill");
      return;
    }
    this.personSkillService.savePersonSkill(this.personSkill).subscribe((data: PersonSkillDto) => {
      this.personSkill = {} as PersonSkillDto;
      this.ngOnInit();
    });
    this.displayModal = false;
  }

  displayApplicantOptions() {
    this.displayModal = true;
  }

  disposeModal() {
    this.displayModal = false;
    this.personSkill = {} as PersonSkillDto;
  }

  rowSelected(skill: SkillDto) {
    this.personSkill.skillId = skill.skillId;
    this.saveSkill();
  }

  deleteSkill(personSkillId: number) {
    this.personSkillService.deletePersonSkill(personSkillId).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
}

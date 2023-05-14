import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InternshipAplicationDto, InternshipAplicationQuestionDto } from 'src/app/dto/internship.application.dto';
import { InternshipDto } from 'src/app/dto/internship.dto';
import { InternshipApplicationService } from 'src/app/services/internship-application.service';
import { InternshipService } from 'src/app/services/internship.service';

@Component({
  selector: 'app-student-internship-application',
  templateUrl: './student-internship-application.component.html',
  styleUrls: ['./student-internship-application.component.css']
})
export class StudentInternshipApplicationComponent {
  show: boolean = false;
  internship: InternshipDto | undefined;
  internshipId: number = -1;

  displayModal: boolean = false;

  answerForm = new FormGroup({
    answer: new FormArray([])
  });

  internshipAplicationDto = { internshipApplicationQuestionDtos: [] as InternshipAplicationQuestionDto[] } as InternshipAplicationDto;

  constructor(private internshipService: InternshipService, private activatedRoute: ActivatedRoute, private internshipApplicationService: InternshipApplicationService) {
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit() {
    this.internshipId = this.activatedRoute.snapshot.params['id'];
    this.internshipService.getInternship(this.internshipId).subscribe((data: InternshipDto[]) => {
      this.internship = data[0];
      this.internship.internshipQuestions.forEach(() => {
        this.addAlias();
      });
      console.log(this.internship);
    });
  }

  displayApplicantOptions() {
    this.displayModal = true;
  }

  disposeModal() {
    this.displayModal = false;
    this.internshipAplicationDto = { internshipApplicationQuestionDtos: [] as InternshipAplicationQuestionDto[] } as InternshipAplicationDto;
    this.answerForm.reset();
  }

  submitForm() {
    console.log(this.internshipAplicationDto);
    this.internshipAplicationDto.internshipId = this.internshipId;
    this.internshipAplicationDto.personId = 1;
    this.answerForm.controls.answer.controls.forEach((control: FormControl, i) => {
      this.internshipAplicationDto.internshipApplicationQuestionDtos.push({ internshipId: this.internshipId, internshipQuestionId: this.internship!.internshipQuestions[i].internshipQuestionId, response: control.value });
    });
    console.log(this.internshipAplicationDto);
    this.internshipApplicationService.saveInternshipAplication(this.internshipAplicationDto).subscribe((data: any) => {
      this.internshipAplicationDto = { internshipApplicationQuestionDtos: [] as InternshipAplicationQuestionDto[] } as InternshipAplicationDto;
      this.answerForm.reset();
    });
    this.displayModal = false;
  }

  get aliases() {
    return this.answerForm.get('answer') as FormArray;
  }

  addAlias() {
    this.aliases.push(new FormControl(''));
  }
}

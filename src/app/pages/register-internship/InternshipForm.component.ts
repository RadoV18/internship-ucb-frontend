import { Component } from '@angular/core';
import { InternshipService } from '../../services/internship.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../dto/role';
import { Requirement } from '../../dto/requirement';
import { Benefit } from '../../dto/benefit';
import { MajorDto } from '../../dto/major.dto';
import { CityDto } from '../../dto/city.dto';
import { QuestionsDto } from "../../dto/questions.dto";
import {MajorsService} from "../../services/majors.service";
import {CitiesService} from "../../services/cities.service";

@Component({
  selector: 'app-internship-form',
  templateUrl: './InternshipForm.component.html',
  styleUrls: ['./InternshipForm.component.css'],
})
export class InternshipFormComponent {
  // login and sidebar
  show: boolean = false;

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }
  constructor(private internshipService: InternshipService, private majorsService: MajorsService, private citiesService: CitiesService) {}
  roleList: Role[] = [];
  requirementList: Requirement[] = [];
  benefitList: Benefit[] = [];
  questionList: QuestionsDto[] = [];
  majorList: MajorDto[] = [];
  majors: MajorDto[] = [];
  cities: CityDto[] = [];
  newRole = '';
  newRequirement = '';
  newBenefit = '';
  internshipForm = new FormGroup({
    title: new FormControl('', [
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z1-9 ]*'),
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.maxLength(500),
      Validators.pattern('[a-zA-Z1-9 ]*'),
      Validators.required,
    ]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    major: new FormControl<MajorDto | null>(null, []),
    role: new FormControl('', [Validators.pattern('[a-zA-Z1-9 :]*')]),
    requirement: new FormControl('', [Validators.pattern('[a-zA-Z1-9 :]*')]),
    benefit: new FormControl('', [Validators.pattern('[a-zA-Z1-9 :]*')]),
    city: new FormControl<CityDto | null>(null, [Validators.required]),
    question: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.citiesService.getCities().subscribe({
      next: (response) => {
        this.cities = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.majorsService.getMajors("name").subscribe({
      next: (response) => {
        this.majors = response.data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addMajor() {
    const major = this.internshipForm.get('major')?.value;

    if (major) {
      const isMajorListed =
        this.majorList.filter((m) => m.majorId === major.majorId).length > 0;
      if (!isMajorListed) {
        this.majorList = [...this.majorList, major];
        this.internshipForm.get('major')?.reset();
      } else {
        alert('MajorDto already added');
        this.internshipForm.get('major')?.reset();
      }
    } else {
      alert('Please Select a major');
    }
  }
  addRole() {
    const role = this.internshipForm.get('role')?.value;
    if (role) {
      this.roleList = [
        ...this.roleList,
        { id: this.roleList.length + 1, description: role },
      ];
      this.internshipForm.get('role')?.reset();
    } else {
      alert('Please enter role');
    }
  }
  addBenefit() {
    const benefit = this.internshipForm.get('benefit')?.value;
    if (benefit) {
      this.benefitList = [
        ...this.benefitList,
        { id: this.benefitList.length + 1, description: benefit },
      ];
      this.internshipForm.get('benefit')?.reset();
    } else {
      alert('Please enter benefit');
    }
  }
  addRequirement() {
    const requirement = this.internshipForm.get('requirement')?.value;
    if (requirement) {
      this.requirementList = [
        ...this.requirementList,
        { id: this.requirementList.length + 1, description: requirement },
      ];
      this.internshipForm.get('requirement')?.reset();
    } else {
      alert('Please enter requirement');
    }
  }

  addQuestion() {
    const question = this.internshipForm.get('question')?.value;
    if (question) {
      this.questionList = [
        ...this.questionList,
        { id: this.questionList.length + 1, description: question },
      ];
      this.internshipForm.get('question')?.reset();
    } else {
      alert('Please enter requirement');
    }
  }

  deleteRole(index: number) {
    this.roleList.splice(index, 1);
  }
  deleteRequirement(index: number) {
    this.requirementList.splice(index, 1);
  }
  deleteBenefit(index: number) {
    this.benefitList.splice(index, 1);
  }
  deleteMajor(index: number) {
    this.majorList.splice(index, 1);
  }
  deleteQuestion(index: number) {
    this.questionList.splice(index, 1);
  }

  onSubmit() {
    if (this.roleList.length === 0) {
      alert('Please add at least one role');
      return;
    }
    if (this.requirementList.length === 0) {
      alert('Please add at least one requirement');
      return;
    }
    if (this.benefitList.length === 0) {
      alert('Please add at least one benefit');
      return;
    }
    if (this.majorList.length === 0) {
      alert('Please add at least one major');
      return;
    }
    const city = this.internshipForm.get('city')?.value;
    if (!city) {
      alert('Please select a city');
      return;
    }
    const internship = {
      title: this.internshipForm.get('title')?.value,
      description: this.internshipForm.get('description')?.value,
      startingDate: this.internshipForm.get('startDate')?.value,
      endingDate: this.internshipForm.get('endDate')?.value,
      majorList: this.majorList,
      internshipRoles: this.roleList,
      internshipRequirements: this.requirementList,
      internshipBenefits: this.benefitList,
      institutionId: 1,
      cityId: city.cityId,
    };
    console.table(internship);
    this.internshipService.saveInternship(internship).subscribe({
      next: (res) => {
        alert('Internship created successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected readonly Date = Date;
}

import { Component } from '@angular/core';
import { InternshipService } from '../../services/internship.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from '../../dto/role';
import { Requirement } from '../../dto/requirement';
import { Benefit } from '../../dto/benefit';
import { MajorDto } from '../../dto/major.dto';
import { CityDto } from '../../dto/city.dto';
import { QuestionsDto } from '../../dto/questions.dto';
import { MajorsService } from '../../services/majors.service';
import { CitiesService } from '../../services/cities.service';
import { Router } from '@angular/router';
import { ResponseDto } from '../../dto/response.dto';
import {
  dateValidator,
  minDateValidator,
} from 'src/app/validators/date-validator';

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

  //modal
  displayModal: boolean = false;

  constructor(
    private internshipService: InternshipService,
    private majorsService: MajorsService,
    private citiesService: CitiesService,
    private router: Router
  ) {}
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
  today = new Date();
  tomorrow = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
  internshipForm = new FormGroup(
    {
      title: new FormControl('', [
        Validators.maxLength(50),
        Validators.pattern('[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9 :]*'),
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.maxLength(500),
        Validators.pattern(
          '[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9 :,.!?@#$%^&*()_+-={}<>;\'"\\[\\]\\|\\n]*'
        ),
        Validators.required,
      ]),
      startDate: new FormControl('', [
        Validators.required,
        minDateValidator(this.today),
      ]),
      endDate: new FormControl('', [
        Validators.required,
        minDateValidator(this.tomorrow),
      ]),
      major: new FormControl<MajorDto | null>(null, []),
      role: new FormControl('', [
        Validators.pattern(
          '[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9 :,.!?@#$%^&*()_+-={}<>;\'"\\[\\]\\|\\n]*'
        ),
      ]),
      requirement: new FormControl('', [
        Validators.pattern(
          '[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9 :,.!?@#$%^&*()_+-={}<>;\'"\\[\\]\\|\\n]*'
        ),
      ]),
      benefit: new FormControl('', [
        Validators.pattern(
          '[a-zA-ZáéíñóúüÁÉÍÑÓÚÜ0-9 :,.!?@#$%^&*()_+-={}<>;\'"\\[\\]\\|\\n]*'
        ),
      ]),
      city: new FormControl<CityDto | null>(null, [Validators.required]),
      question: new FormControl({ value: '', disabled: false }, [
        Validators.required,
      ]),
    },
    {
      validators: dateValidator,
    }
  );

  ngOnInit() {
    this.citiesService.getCities().subscribe({
      next: (response) => {
        this.cities = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.majorsService.getMajors('name').subscribe({
      next: (response) => {
        this.majors = response.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  disposeModal() {
    this.router.navigate(['/institucion/convocatorias/solicitadas']);
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
      this.internshipForm.get('role')?.setValue(null);
    } else {
      alert('Por favor, ingrese una función.');
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
      this.internshipForm.get('benefit')?.setValue(null);
    } else {
      alert('Por favor, ingrese un beneficio.');
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
      this.internshipForm.get('requirement')?.setValue(null);
    } else {
      alert('Por favor, ingrese un requisito.');
    }
  }

  addQuestion() {
    const question = this.internshipForm.get('question')?.value;
    if (question) {
      this.questionList = [
        ...this.questionList,
        { id: this.questionList.length + 1, question: question },
      ];
      this.internshipForm.get('question')?.reset();
      if (this.questionList.length === 3) {
        this.internshipForm.get('question')?.disable();
      }
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
    this.internshipForm.get('question')?.enable();
  }

  validateForm(): boolean {
    if (this.internshipForm.get('title')?.invalid) {
      return true;
    }
    if (this.internshipForm.get('description')?.invalid) {
      return true;
    }
    if (this.internshipForm.get('startDate')?.invalid) {
      return true;
    }
    if (this.internshipForm.get('endDate')?.invalid) {
      return true;
    }
    if (this.roleList.length === 0) {
      return true;
    }
    if (this.requirementList.length === 0) {
      return true;
    }
    if (this.benefitList.length === 0) {
      return true;
    }
    if (this.majorList.length === 0) {
      return true;
    }
    if (this.internshipForm.get('city')?.invalid) {
      return true;
    }
    return false;
  }

  onSubmit() {
    const internship = {
      title: this.internshipForm.get('title')?.value,
      description: this.internshipForm.get('description')?.value,
      startingDate: this.internshipForm.get('startDate')?.value,
      endingDate: this.internshipForm.get('endDate')?.value,
      majorList: this.majorList,
      internshipQuestions: this.questionList,
      internshipRoles: this.roleList,
      internshipRequirements: this.requirementList,
      internshipBenefits: this.benefitList,
      institutionId: 1,
      cityId: this.internshipForm.get('city')?.value!.cityId,
    };
    console.table(internship);
    this.internshipService.saveInternship(internship).subscribe({
      next: (res: ResponseDto<any>) => {
        if (res.success) {
          this.displayModal = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  validateDate() {
    const startDate = this.internshipForm.get('startDate')?.value;
    const endDate = this.internshipForm.get('endDate')?.value;
    let startingDate;
    let endingDate;
    if (startDate && endDate) {
      startingDate = new Date(startDate);
      endingDate = new Date(endDate);
      return startingDate >= endingDate;
    }
    return false;
  }
  protected readonly Date = Date;
}

import {Component, OnInit} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InstitutionDto } from 'src/app/dto/institution.dto';
import { InternshipApplicationDto, InternshipAplicationQuestionDto } from 'src/app/dto/internship.application.dto';
import { InternshipDto } from 'src/app/dto/internship.dto';
import { InstitutionService } from 'src/app/services/institution.service';
import { InternshipApplicationService } from 'src/app/services/internship-application.service';
import { InternshipService } from 'src/app/services/internship.service';
import {ResponseDto} from "../../dto/response.dto";

@Component({
  selector: 'app-student-internship-application',
  templateUrl: './student-internship-application.component.html',
  styleUrls: ['./student-internship-application.component.css']
})
export class StudentInternshipApplicationComponent implements OnInit {
  show: boolean = false;
  internship: InternshipDto | null;
  internshipId: number = -1;
  displayInternship: boolean = true;

  displayModal: boolean = false;

  answerForm = new FormGroup({
    answer: new FormArray([])
  });

  internshipAplicationDto = { internshipApplicationQuestions: [] as InternshipAplicationQuestionDto[] } as InternshipApplicationDto;

  constructor(private internshipService: InternshipService, private activatedRoute: ActivatedRoute) {
  }

  toggleView(e: boolean) {
    this.displayInternship = !e;
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit() {
    this.internshipId = this.activatedRoute.snapshot.params['id'];
    this.internshipService.getInternshipDetails(this.internshipId).subscribe((response: ResponseDto<InternshipDto>) => {
      this.internship = response.data;
      this.internship.internshipQuestions.forEach(() => {
        this.addAlias();
      });
    });
  }

  displayApplicantOptions() {
    this.displayModal = true;
  }

  disposeModal() {
    this.displayModal = false;
    this.internshipAplicationDto = { internshipApplicationQuestions: [] as InternshipAplicationQuestionDto[] } as InternshipApplicationDto;
    this.answerForm.reset();
  }

  submitForm() {
    this.internshipAplicationDto.internshipId = this.internshipId;
    this.internshipAplicationDto.personId = Number(localStorage.getItem('id'));
    this.answerForm.controls.answer.controls.forEach((control: FormControl, i) => {
      this.internshipAplicationDto.internshipApplicationQuestions.push({
        questionId: this.internship!.internshipQuestions[i].id,
        response: control.value
      });
    });
    this.internshipService.applyToInternship(this.internshipId, this.internshipAplicationDto).subscribe((data: any) => {
      this.internshipAplicationDto = { internshipApplicationQuestions: [] as InternshipAplicationQuestionDto[] } as InternshipApplicationDto;
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

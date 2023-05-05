import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InternshipService} from "../../services/internship.service";
import {ApplicantDto} from "../../dto/applicant.dto";
import {ResponseDto} from "../../dto/response.dto";

interface IApplicantOptions {
  value: number;
  message: string;
}

@Component({
  selector: 'app-institution-internship-details',
  templateUrl: './institution-internship-details.component.html',
  styleUrls: ['./institution-internship-details.component.css']
})
export class InstitutionInternshipDetailsComponent {
  show: boolean = false;
  displayModal: boolean = false;
  applicants: Array<ApplicantDto> = [];
  selectedApplicant: ApplicantDto = {
    id: -1,
    name: "",
    major: "",
    email: "",
    submittedOn: new Date(),
    status: "",
    cvUrl: "",
    profilePictureUrl: ""
  }

  private formState: IApplicantOptions = {
    value: -1,
    message: ""
  }
  applicantOptions: FormGroup;

  constructor(private formBuilder: FormBuilder, private internshipService: InternshipService) {
    this.applicantOptions = this.formBuilder.group(this.formState)
  }

  ngOnInit() {
    this.internshipService.getApplicantsByInternshipId(1).subscribe({
      next: (response: ResponseDto<Array<ApplicantDto>>) => {
        this.applicants = response.data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  submitForm() {
    console.log(this.applicantOptions);
  }

  displayApplicantOptions(applicant: ApplicantDto) {
    this.selectedApplicant = applicant;
    this.displayModal = true;
  }

  getTextareaPlaceholder() {
    return `Enviar mensaje a ${this.selectedApplicant.email}`;
  }
}

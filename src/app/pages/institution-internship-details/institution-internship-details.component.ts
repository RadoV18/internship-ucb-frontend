import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InternshipService} from "../../services/internship.service";
import {ApplicantDto} from "../../dto/applicant.dto";
import {ResponseDto} from "../../dto/response.dto";
import {ActivatedRoute, Router} from "@angular/router";

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
  title: string = "";
  internshipId : number = -1;
  show: boolean = false;
  displayModal: boolean = false;
  applicants: Array<ApplicantDto> = [];
  selectedApplicant: ApplicantDto = {
    id: -1,
    applicationId: -1,
    firstName: "",
    lastName: "",
    major: "",
    email: "",
    submittedOn: new Date(),
    status: "",
    cvUrl: "",
    profilePictureUrl: "",
    questionResponses: []
  }
  submissionStatus: Array<string> = ["Pendiente", "Aceptado", "Rechazado"];

  private formState: IApplicantOptions = {
    value: -1,
    message: ""
  }
  applicantOptions: FormGroup;

  constructor(private formBuilder: FormBuilder, private internshipService: InternshipService,
      private activatedRoute: ActivatedRoute, private router: Router) {
    this.applicantOptions = this.formBuilder.group(this.formState)
    this.internshipId = this.activatedRoute.snapshot.params['id'];
    this.title = this.router.getCurrentNavigation()?.extras.state?.['title'];
  }

  ngOnInit() {
    this.internshipService.getApplicantsByInternshipId(this.internshipId).subscribe({
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
    const status = this.applicantOptions.get('value')?.value;
    const message = this.applicantOptions.get('message')?.value;
    this.internshipService.updateApplicationStatus(this.internshipId, this.selectedApplicant.applicationId, status, message).subscribe({
      next: (response: ResponseDto<ApplicantDto>) => {

      },
      error: (error: Error) => {
        console.error(error);
      }
    });
  }

  displayApplicantOptions(applicant: ApplicantDto) {
    this.selectedApplicant = applicant;
    this.displayModal = true;
  }

  getTextareaPlaceholder() {
    return `Enviar mensaje a ${this.selectedApplicant.email}`;
  }

  disposeModal() {
    this.displayModal = false;
    this.applicantOptions.reset();
  }

  protected readonly Number = Number;
}

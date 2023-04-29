import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

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
  private formState: IApplicantOptions = {
    value: -1,
    message: ""
  }
  applicantOptions: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.applicantOptions = this.formBuilder.group(this.formState)
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
}

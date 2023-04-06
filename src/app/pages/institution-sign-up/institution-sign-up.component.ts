import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {wordCountValidator} from "../../validators/word-count-validator";
import {numbersOnlyValidator} from "../../validators/numbers-only-validator";
import {matchingPasswordValidator} from "../../validators/matching-password-validator";

@Component({
  selector: 'app-institution-sign-up',
  templateUrl: './institution-sign-up.component.html',
  styleUrls: ['./institution-sign-up.component.css']
})
export class InstitutionSignUpComponent {

  institutionSignUpForm: FormGroup;
  institutionLogo: File;

  constructor(private formBuilder: FormBuilder) {
    this.institutionSignUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      area: ['' ,[Validators.required]],
      description: ['', [Validators.required, wordCountValidator(200)]],
      contactFirstName: ['', [Validators.required]],
      contactLastName: ['', [Validators.required]],
      contactPosition: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, numbersOnlyValidator(), Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: matchingPasswordValidator
    });
  }

  handleImageChange(event: File) {
    this.institutionLogo = event;
  }

  submit() {
    console.log(this.institutionSignUpForm);
  }
}

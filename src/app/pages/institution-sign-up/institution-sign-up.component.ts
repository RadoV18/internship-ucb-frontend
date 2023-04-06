import {Component, ElementRef, ViewChild} from '@angular/core';
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
  institutionLogo: File | null = null;
  formSubmitted: boolean = false;
  @ViewChild('imageInput') imageInput: ElementRef;

  constructor(private formBuilder: FormBuilder) {
    this.institutionSignUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      area: ['', [Validators.required]],
      description: ['', [Validators.required, wordCountValidator(200)]],
      contactFirstName: ['', [Validators.required]],
      contactLastName: ['', [Validators.required]],
      contactPosition: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, numbersOnlyValidator(), Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: matchingPasswordValidator
    });
  }

  handleImageChange(event: File) {
    this.institutionLogo = event;
  }

  submit() {
    this.formSubmitted = true;
    if(this.institutionLogo == null) {
      this.imageInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    console.log(this.institutionSignUpForm);
  }
}

import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {wordCountValidator} from "../../validators/word-count-validator";
import {numbersOnlyValidator} from "../../validators/numbers-only-validator";
import {matchingPasswordValidator} from "../../validators/matching-password-validator";
import {SignUpService} from "../../services/sign-up.service";
import {InstitutionSignUpDto} from "../../dto/institution.sign.up.dto";
import {VerificationCodeDto} from "../../dto/verification.code.dto";
import {ResponseDto} from "../../dto/response.dto";
import {Router} from "@angular/router";

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

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.institutionSignUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      area: ['', [Validators.required]],
      description: ['', [Validators.required, wordCountValidator(200)]],
      contactFirstName: ['', [Validators.required]],
      contactLastName: ['', [Validators.required]],
      contactPosition: ['', [Validators.required]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, numbersOnlyValidator(), Validators.pattern(/^[0-9]{8}$/)]],
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
    if(this.institutionSignUpForm.invalid) {
      return;
    }
    const institutionSignUpDto : InstitutionSignUpDto = {
      name: this.institutionSignUpForm.value.name,
      area: this.institutionSignUpForm.value.area,
      description: this.institutionSignUpForm.value.description,
      contactFirstName: this.institutionSignUpForm.value.contactFirstName,
      contactLastName: this.institutionSignUpForm.value.contactLastName,
      contactPosition: this.institutionSignUpForm.value.contactPosition,
      contactEmail: this.institutionSignUpForm.value.contactEmail,
      contactPhone: this.institutionSignUpForm.value.contactPhone,
      email: this.institutionSignUpForm.value.email,
      password: this.institutionSignUpForm.value.password,
      logo: this.institutionLogo!!
    }
    this.signUpService.institutionSignUp(institutionSignUpDto).subscribe({
      next: (response : ResponseDto<VerificationCodeDto>) => {
        if(response.success) {
          localStorage.setItem('uuid', response.data.uuid);
          localStorage.setItem('email', response.data.email);
          this.router.navigate(['/codigo-de-verificacion']);
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}

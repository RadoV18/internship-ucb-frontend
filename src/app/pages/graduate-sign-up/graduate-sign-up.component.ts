import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { matchingPasswordValidator } from "../../validators/matching-password-validator";
import { SignUpService } from "../../services/sign-up.service";
import { GraduateSignUpDto } from "../../dto/graduate.sign.up.dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-graduate-sign-up',
  templateUrl: './graduate-sign-up.component.html',
  styleUrls: ['./graduate-sign-up.component.css']
})
export class GraduateSignUpComponent {
  graduateSignUpForm: FormGroup;
  institutionLogo: File | null = null;
  formSubmitted: boolean = false;
  @ViewChild('imageInput') imageInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.graduateSignUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      campusMajorId: ['', [Validators.required]],
      graduationDate: ['', [Validators.required]],
      username: ['', [Validators.required]],
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
    if (this.institutionLogo == null) {
      this.imageInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (this.graduateSignUpForm.invalid) {
      return;
    }
    const graduateSignUpDto: GraduateSignUpDto = {
      personDto: {
        signupRequestDto: {
          username: this.graduateSignUpForm.value.username,
          email: this.graduateSignUpForm.value.email,
          password: this.graduateSignUpForm.value.password
        },
        firstName: this.graduateSignUpForm.value.firstName,
        lastName: this.graduateSignUpForm.value.lastName,
        ci: this.graduateSignUpForm.value.ci,
        phoneNumber: this.graduateSignUpForm.value.phoneNumber,
        cv: ""
      },
      campusMajorId: this.graduateSignUpForm.value.campusMajorId,
      graduationDate: this.graduateSignUpForm.value.graduationDate
    }
    console.log(graduateSignUpDto);

    this.signUpService.graduateSignUp(graduateSignUpDto).subscribe((data: any) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
}

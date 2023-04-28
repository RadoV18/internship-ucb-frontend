import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { matchingPasswordValidator } from "../../validators/matching-password-validator";
import { SignUpService } from "../../services/sign-up.service";
import { GraduateSignUpDto } from "../../dto/graduate.sign.up.dto";
import { Router } from "@angular/router";
import { ResponseDto } from "../../dto/response.dto";
import { VerificationCodeDto } from "../../dto/verification.code.dto";
import { CampusMajorDto } from 'src/app/dto/campusmajor.dto';
import { CampusMajorService } from 'src/app/services/campus-major.service';

@Component({
  selector: 'app-graduate-sign-up',
  templateUrl: './graduate-sign-up.component.html',
  styleUrls: ['./graduate-sign-up.component.css']
})
export class GraduateSignUpComponent {
  graduateSignUpForm: FormGroup;
  profilePicture: File | null = null;
  cvFile: File | null = null;
  formSubmitted: boolean = false;
  currentYear: number = new Date().getFullYear();
  @ViewChild('imageInput') imageInput: ElementRef;

  campusMajors: CampusMajorDto[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private campusMajorService: CampusMajorService
  ) {
    this.graduateSignUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      campusMajorId: [0, [Validators.required]],
      graduationDate: ['', [Validators.required, Validators.min(1900), Validators.max(this.currentYear)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: matchingPasswordValidator
    });

    this.campusMajorService.getCampusMajors().subscribe((data: CampusMajorDto[]) => {
      this.campusMajors = data;
      console.log(this.campusMajors);
    });
  }

  handleImageChange(event: File) {
    this.profilePicture = event;
  }

  handleFileChange(event: File) {
    this.cvFile = event;
  }

  submit() {
    this.formSubmitted = true;
    if (this.profilePicture == null) {
      this.imageInput.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (this.cvFile == null) {
      return;
    }
    if (this.graduateSignUpForm.invalid) {
      return;
    }
    const graduateSignUpDto: GraduateSignUpDto = {
      personDto: {
        signupRequestDto: {
          email: this.graduateSignUpForm.value.email,
          password: this.graduateSignUpForm.value.password,
          s3_profile_picture: this.profilePicture!!
        },
        firstName: this.graduateSignUpForm.value.firstName,
        lastName: this.graduateSignUpForm.value.lastName,
        ci: this.graduateSignUpForm.value.ci,
        phoneNumber: this.graduateSignUpForm.value.phoneNumber,
        s3_cv: this.cvFile!!
      },
      campusMajorId: this.graduateSignUpForm.value.campusMajorId,
      graduationDate: this.graduateSignUpForm.value.graduationDate
    }

    this.signUpService.graduateSignUp(graduateSignUpDto).subscribe({
      next: (response: ResponseDto<VerificationCodeDto>) => {
        if (response.success) {
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

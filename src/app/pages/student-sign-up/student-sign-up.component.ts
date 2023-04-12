import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { matchingPasswordValidator } from "../../validators/matching-password-validator";
import { SignUpService } from "../../services/sign-up.service";
import { StudentSignUpDto } from "../../dto/student.sign.up.dto";
import { Router } from "@angular/router";
import { ResponseDto } from "../../dto/response.dto";
import { VerificationCodeDto } from "../../dto/verification.code.dto";

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css']
})
export class StudentSignUpComponent {

  studentSignUpForm: FormGroup;
  profilePicture: File | null = null;
  cvFile: File | null = null;
  formSubmitted: boolean = false;
  @ViewChild('imageInput') imageInput: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router
  ) {
    this.studentSignUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      ci: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      campusMajorId: ['', [Validators.required]],
      semester: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: matchingPasswordValidator
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
    if (this.studentSignUpForm.invalid) {
      return;
    }
    const studentSignUpDto: StudentSignUpDto = {
      personDto: {
        signupRequestDto: {
          email: this.studentSignUpForm.value.email,
          password: this.studentSignUpForm.value.password,
          s3_profile_picture: this.profilePicture!!
        },
        firstName: this.studentSignUpForm.value.firstName,
        lastName: this.studentSignUpForm.value.lastName,
        ci: this.studentSignUpForm.value.ci,
        phoneNumber: this.studentSignUpForm.value.phoneNumber,
        s3_cv: this.cvFile!!
      },
      campusMajorId: this.studentSignUpForm.value.campusMajorId,
      semester: this.studentSignUpForm.value.semester
    }

    this.signUpService.studentSignUp(studentSignUpDto).subscribe({
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

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { matchingPasswordValidator } from "../../validators/matching-password-validator";
import { SignUpService } from "../../services/sign-up.service";
import { StudentSignUpDto } from "../../dto/student.sign.up.dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-student-sign-up',
  templateUrl: './student-sign-up.component.html',
  styleUrls: ['./student-sign-up.component.css']
})
export class StudentSignUpComponent {

  studentSignUpForm: FormGroup;
  institutionLogo: File | null = null;
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
    if (this.studentSignUpForm.invalid) {
      return;
    }
    const studentSignUpDto: StudentSignUpDto = {
      personDto: {
        signupRequestDto: {
          username: this.studentSignUpForm.value.username,
          email: this.studentSignUpForm.value.email,
          password: this.studentSignUpForm.value.password
        },
        firstName: this.studentSignUpForm.value.firstName,
        lastName: this.studentSignUpForm.value.lastName,
        ci: this.studentSignUpForm.value.ci,
        phoneNumber: this.studentSignUpForm.value.phoneNumber,
        cv: ""
      },
      campusMajorId: this.studentSignUpForm.value.campusMajorId,
      semester: this.studentSignUpForm.value.semester
    }
    console.log(studentSignUpDto);

    this.signUpService.studentSignUp(studentSignUpDto).subscribe((data: any) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
}

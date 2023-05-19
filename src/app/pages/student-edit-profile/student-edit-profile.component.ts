import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileDto } from 'src/app/dto/profile.dto';
import { ResponseDto } from 'src/app/dto/response.dto';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-student-edit-profile',
  templateUrl: './student-edit-profile.component.html',
  styleUrls: ['./student-edit-profile.component.css'],
})
export class StudentEditProfileComponent implements OnInit {
  person: ProfileDto | any = {
    personId: 0,
    firstName: '',
    lastName: '',
    ci: '',
    phoneNumber: '',
    cvFile: null,
    profilePicture: '',
    semester: 0,
    major: '',
  };
  cvFile: File | null = null;
  formSubmitted: boolean = false;
  email: string | null;

  personForm = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9 ]*'),
    ]),
    semester: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(2),
      Validators.pattern('[0-9 ]*'),
    ]),
  });
  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.findUserProfileByEmail(this.email);
  }
  constructor(private profileService: ProfileService) {}

  findUserProfileByEmail(email: string | null) {
    if (email) {
      this.profileService.findStudentProfileByEmail(email).subscribe({
        next: (response: ResponseDto<ProfileDto>) => {
          this.person = response.data;
          this.personForm.get('phoneNumber')?.setValue(this.person.phoneNumber);
          this.personForm.get('semester')?.setValue(this.person.semester);
          console.log(this.person);
          console.log(this.person.graduate);
        },
      });
    }
  }

  handleFileChange(event: File) {
    this.cvFile = event;
  }

  submit() {
    const phoneNumber = this.personForm?.value?.phoneNumber;
    const semester = this.personForm?.value?.semester;
    let profileDto: ProfileDto = {
      personId: this.person.personId,
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      ci: this.person.ci,
      phoneNumber: '',
      semester: 0,
      graduate: this.person.graduate,
      major: this.person.major,
      cvFile: this.cvFile,
      graduationDate: this.person.graduationDate,
      profilePicture: this.person.profilePicture,
    };
    if (this.person.graduate) {
      if (phoneNumber) {
        profileDto.phoneNumber = phoneNumber;
        this.updateProfile(profileDto);
      } else {
        alert('Debe ingresar un numero de telefono');
      }
    } else {
      if (phoneNumber && semester) {
        profileDto.phoneNumber = phoneNumber;
        profileDto.semester = parseInt(semester);
        this.updateProfile(profileDto);
      } else {
        alert('Debe ingresar un numero de telefono y un semestre');
      }
    }
  }
  validateSemester() {
    const semester = this.personForm?.value?.semester;
    if (semester) {
      if (parseInt(semester) >= 1 && parseInt(semester) <= 10) {
        return true;
      }
      return false;
    }
    return true;
  }
  formatDate(): string {
    const date = new Date(this.person.graduationDate);
    if (date) {
      return date.toLocaleDateString();
    }
    return '';
  }

  updateProfile(profileDto: ProfileDto) {
    this.profileService.updateStudent(profileDto).subscribe((response) => {
      console.log(response);
      alert('Se actualizo correctamente');
    });
  }
}

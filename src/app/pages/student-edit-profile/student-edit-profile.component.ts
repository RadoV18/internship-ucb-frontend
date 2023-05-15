import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonDto } from 'src/app/dto/person.dto';
import { UserUcbDto } from 'src/app/dto/user.ucb.dto';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-edit-profile',
  templateUrl: './student-edit-profile.component.html',
  styleUrls: ['./student-edit-profile.component.css'],
})
export class StudentEditProfileComponent implements OnInit {
  person: PersonDto | any = {};
  cvFile: File | null = null;
  formSubmitted: boolean = false;
  email: string | null;
  user: UserUcbDto;

  personForm = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.pattern('[0-9 ]*'),
    ]),
  });
  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.findPersonByEmail(this.email);
  }
  constructor(
    private personService: PersonService,
    private router: Router,
    private userService: UserService
  ) {}

  findUserByEmail(email: string | null) {
    if (email) {
      this.userService.getUSerByEmail(email).subscribe((response) => {
        console.log(response);
        this.user = response.data;
      });
    }
  }
  findPersonByEmail(email: string | null) {
    if (email) {
      this.personService.getPersonByEmail(email).subscribe((response) => {
        console.log(response);
        this.person = response.data;
      });
    } else {
      alert('Porvafor ingrese un correo valido');
    }
  }
  handleFileChange(event: File) {
    this.cvFile = event;
  }

  submit() {
    const phoneNumber = this.personForm?.value?.phoneNumber;
    if (phoneNumber) {
      const personDto: PersonDto = {
        personId: this.person.personId,
        firstName: this.person.firstName,
        lastName: this.person.lastName,
        ci: this.person.ci,
        phoneNumber: phoneNumber,
        cvFile: this.cvFile,
      };
      this.personService.updatePerson(personDto).subscribe((response) => {
        console.log(response);
        alert('Se actualizo correctamente');
      });
    }
  }
}

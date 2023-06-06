import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InstitutionDto } from 'src/app/dto/institution.dto';
import { InstitutionService } from 'src/app/services/institution.service';
import { numbersOnlyValidator } from 'src/app/validators/numbers-only-validator';
import { wordCountValidator } from 'src/app/validators/word-count-validator';

@Component({
  selector: 'app-institution-edit',
  templateUrl: './institution-edit.component.html',
  styleUrls: ['./institution-edit.component.css'],
})
export class InstitutionEditComponent implements OnInit{
  institutionForm: FormGroup;
  formSubmitted: boolean = false;
  show: boolean = false;
  @ViewChild('imageInput') imageInput: ElementRef;
  institution: InstitutionDto = {
    institutionId: 0,
    name: '',
    area: '',
    description: '',
    contactFirstName: '',
    contactLastName: '',
    contactEmail: '',
    contactPhone: '',
    contactPosition: '',
    user: {
      userId: 0,
      email: '',
      s3ProfilePicture: '',
    }
  };
  constructor(
    private formBuilder: FormBuilder,
    private institutionService: InstitutionService,
    private router: Router
  ) {
    this.institutionForm = this.formBuilder.group(
      {
        name: [{value: '',disabled:true}, [Validators.required]],
        area: ['', [Validators.required]],
        description: ['', [Validators.required, wordCountValidator(200)]],
        contactFirstName: ['', [Validators.required]],
        contactLastName: ['', [Validators.required]],
        contactPosition: ['', [Validators.required]],
        contactEmail: ['', [Validators.required, Validators.email]],
        contactPhone: [
          '',
          [
            Validators.required,
            numbersOnlyValidator(),
            Validators.pattern(/^[0-9]{8}$/),
          ],
        ],
      }
    );
  }

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if(email){
      this.institutionService.getInstitutionByUserEmail(email).subscribe(
        {
          next: (response:InstitutionDto) => {
            this.institution = response;
            this.institutionForm.patchValue({
              name: this.institution.name,
              area: this.institution.area,
              description: this.institution.description,
              contactFirstName: this.institution.contactFirstName,
              contactLastName: this.institution.contactLastName,
              contactPosition: this.institution.contactPosition,
              contactEmail: this.institution.contactEmail,
              contactPhone: this.institution.contactPhone,
            })
            console.log(response)
          }
        }
      )
    } else {
      alert("You are not logged in");
    }
  }


  submit() { 
    if (this.institutionForm.invalid) {
      console.log(this.institutionForm.value);
      return;
    }
    const institution: InstitutionDto = {
      institutionId: this.institution.institutionId,
      name: this.institutionForm.value.name,
      area: this.institutionForm.value.area,
      description: this.institutionForm.value.description,
      contactFirstName: this.institutionForm.value.contactFirstName,
      contactLastName: this.institutionForm.value.contactLastName,
      contactPosition: this.institutionForm.value.contactPosition,
      contactEmail: this.institutionForm.value.contactEmail,
      contactPhone: this.institutionForm.value.contactPhone,
      user: {
        userId: this.institution.user.userId,
        email: this.institutionForm.value.email,
        s3ProfilePicture: this.institution.user.s3ProfilePicture,

      }
  
    };
      this.institutionService.updateInstitution(institution).subscribe({
        next: (response) => {
          alert("Datos actualizados correctamente");
        }
      })
  }
}

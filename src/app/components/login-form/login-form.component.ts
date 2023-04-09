import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

interface ILoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  private formState: ILoginForm = {
    email: '',
    password: ''
  }

  error: string = '';

  form : FormGroup

  constructor(private formBuilder : FormBuilder, private authenticationService : AuthenticationService, private router: Router){ 
    this.form = this.formBuilder.group(this.formState);
  }

  private validateForm() : void {
    this.error = '';

    if (this.form.value.email === '' || this.form.value.password === '') {
      this.error = 'Por favor ingrese todos los datos';
    }
  }

  public login() : void {
    this.validateForm();

    if (this.error === '') {
      this.authenticationService.postLogin(this.form.value.email, this.form.value.password).subscribe({
        next: (response) => {
          //TODO: Save user data in local storage and handle global user
          this.router.navigate(['/']);
        },
        error: (error) => {
          if (error.status === 401) {
            this.error = 'Datos incorrectos, vuelva a intentar';
          }
        }
      });
    }
  }
}

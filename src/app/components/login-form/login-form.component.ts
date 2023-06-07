import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthDto } from "../../dto/auth.dto";
import { ResponseDto } from "../../dto/response.dto";
import { TsService } from 'src/app/services/ts.service';

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
  @Output() public signUpClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  private formState: ILoginForm = {
    email: '',
    password: ''
  }

  error: string = '';

  form: FormGroup

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router, private tsService: TsService) {
    this.form = this.formBuilder.group(this.formState);
  }

  private validateForm(): void {
    this.error = '';

    if (this.form.value.email === '' || this.form.value.password === '') {
      this.error = 'Por favor ingrese todos los datos';
    }
  }

  public login(): void {
    this.validateForm();

    if (this.error === '') {
      this.authenticationService.postLogin(this.form.value.email, this.form.value.password).subscribe({
        next: (response: ResponseDto<AuthDto>) => {
          this.tsService.saveToken(response.data.token);
          this.tsService.saveRefreshToken(response.data.refreshToken);
          this.tsService.saveUser(response.data);

          if (response.data.roles[0] === "ROLE_ADMIN") {
            this.router.navigate(['/administrador/graduados']);
          }
          if (response.data.roles[0] === "ROLE_INSTITUTION") {
            this.router.navigate(['/institucion/convocatorias']);
          }
          if (response.data.roles[0] === "ROLE_STUDENT") {
            this.router.navigate(['/estudiante/inicio']);
          }

          // this.authenticationService.setAuthenticatedUser(response.data);
          // const type = response.data.accountType;
          // if (type === 0) {
          //   this.router.navigate(['/administrador/graduados']);
          // } else if (type === 1) {
          //   this.router.navigate(['/institucion/convocatorias']);
          // } else if (type === 2) {
          //   this.router.navigate(['/pasantias']);
          // }
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

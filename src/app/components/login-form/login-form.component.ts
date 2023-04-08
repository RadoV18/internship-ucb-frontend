import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  form : FormGroup

  constructor(private formBuilder : FormBuilder){ 
    this.form = this.formBuilder.group(this.formState);
  }

  public login() : void {
    console.log(this.form.value);
  }
}

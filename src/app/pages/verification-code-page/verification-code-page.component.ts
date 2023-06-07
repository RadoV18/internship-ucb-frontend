import { Component } from '@angular/core';
import {SignUpService} from "../../services/sign-up.service";
import {ResponseDto} from "../../dto/response.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verification-code-page-page',
  templateUrl: './verification-code-page.component.html',
  styleUrls: ['./verification-code-page.component.css']
})
export class VerificationCodePageComponent {
  email: string = localStorage.getItem('email') || '';
  verificationCode: string = '';
  displayModal: boolean = false;
  needsVerification: boolean = false;
  isSuccesful: boolean = true;

  constructor(private signUpService: SignUpService, private router: Router) { }

  setVerificationCode(code: string) {
    this.verificationCode = code;
  }

  submit() {
    this.signUpService.verificationCode({
      uuid: localStorage.getItem('uuid') || '',
      code: this.verificationCode
    }).subscribe({
      next: (response: ResponseDto<boolean>) => {
        if(response.success) {
          this.isSuccesful = true;
          // localStorage.clear();
          this.displayModal = true;
          if(response.data) {
            this.needsVerification = true;
          }
        } else {
          this.isSuccesful = false;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  close() {
    this.router.navigate(['/ingresar']);
  }
}

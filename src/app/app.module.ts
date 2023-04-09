import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionSignUpComponent } from './pages/institution-sign-up/institution-sign-up.component';
import { LoginNavbarComponent } from './components/login-navbar/login-navbar.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { VerificationCodePageComponent } from './pages/verification-code-page/verification-code-page.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { ModalComponent } from './components/modal/modal.component';
import { StudentSignUpComponent } from './pages/student-sign-up/student-sign-up.component';
import { GraduateSignUpComponent } from './pages/graduate-sign-up/graduate-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginNavbarComponent,
    InstitutionSignUpComponent,
    ImageInputComponent,
    VerificationCodePageComponent,
    VerificationCodeComponent,
    ModalComponent,
    StudentSignUpComponent,
    GraduateSignUpComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

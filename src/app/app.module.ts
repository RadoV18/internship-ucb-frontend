import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstitutionSignUpComponent } from './pages/institution-sign-up/institution-sign-up.component';
import { LoginNavbarComponent } from './components/login-navbar/login-navbar.component';
import { ImageInputComponent } from './components/image-input/image-input.component';
import { VerificationCodePageComponent } from './pages/verification-code-page/verification-code-page.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './pages/home/home.component';
import { PdfFileInputComponent } from './components/pdf-file-input/pdf-file-input.component';
import { InternshipFormComponent } from './pages/register-internship/InternshipForm.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

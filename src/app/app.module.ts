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
import { StudentSignUpComponent } from './pages/student-sign-up/student-sign-up.component';
import { GraduateSignUpComponent } from './pages/graduate-sign-up/graduate-sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './pages/home/home.component';
import { PdfFileInputComponent } from './components/pdf-file-input/pdf-file-input.component';
import { InternshipFormComponent } from './pages/register-internship/InternshipForm.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeInstitutionComponent } from './pages/home-institution/home-institution.component';
import { InstitutionNavbarComponent } from './components/institution-navbar/institution-navbar.component';
import { InstitutionSidebarComponent } from './components/institution-sidebar/institution-sidebar.component';
import { HomeAdminGraduatesComponent } from './pages/home-admin-graduates/home-admin-graduates.component';
import { HomeAdminInstitutionComponent } from './pages/home-admin-institution/home-admin-institution.component';
import { NotificationsService } from './services/notifications.service';
import { NotificationsServiceFactory } from './notifications-service-factory';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ActiveInternshipsPageComponent } from './pages/active-internships-page/active-internships-page.component';
import { InstitutionInternshipCardComponent } from './components/institution-internship-card/institution-internship-card.component';
import { InstitutionInternshipDetailsComponent } from './pages/institution-internship-details/institution-internship-details.component';
import { InternshipApplicantsTableComponent } from './components/internship-applicants-table/internship-applicants-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginNavbarComponent,
    InstitutionSignUpComponent,
    InternshipFormComponent,
    ImageInputComponent,
    VerificationCodePageComponent,
    VerificationCodeComponent,
    ModalComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    PdfFileInputComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    StudentSignUpComponent,
    GraduateSignUpComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeInstitutionComponent,
    InstitutionNavbarComponent,
    InstitutionSidebarComponent,
    HomeAdminInstitutionComponent,
    HomeAdminGraduatesComponent,
    NotificationsComponent,
    ActiveInternshipsPageComponent,
    InstitutionInternshipCardComponent,
    InstitutionInternshipDetailsComponent,
    InternshipApplicantsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: NotificationsService,
      useFactory: NotificationsServiceFactory
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

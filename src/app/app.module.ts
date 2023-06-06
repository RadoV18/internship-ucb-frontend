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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CommonModule } from '@angular/common';
import { InternshipListComponent } from './pages/internship-list/internship-list.component';
import { InternshipCardComponent } from './components/internship-card/internship-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentNavbarComponent } from './components/student-navbar/student-navbar.component';
import { AdminConvocationsComponent } from './pages/admin-convocations/admin-convocations.component';
import { StudentInternshipApplicationComponent } from './pages/student-internship-application/student-internship-application.component';
import { PersonSkillComponent } from './pages/person-skill/person-skill.component';
import { SkillFilterPipe } from './pipes/skill-filter.pipe';
import { InternshipDescriptionComponent } from './components/internship-description/internship-description.component';
import { InstitutionDescriptionComponent } from './components/institution-description/institution-description.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { StudentEditProfileComponent } from './pages/student-edit-profile/student-edit-profile.component';
import { InstitutionEditComponent } from './pages/institution-edit/institution-edit.component';
import { InternshipEditComponent } from './pages/internship-edit/internship-edit.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { RequestedInternshipsComponent } from './pages/requested-internships/requested-internships.component';

import { AuthenticationGuard } from './guards/authentication.guard';
import { BearerInterceptor } from './interceptors/bearer.interceptor';

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
    LoginFormComponent,
    NotificationsComponent,
    ActiveInternshipsPageComponent,
    InstitutionInternshipCardComponent,
    InstitutionInternshipDetailsComponent,
    InternshipApplicantsTableComponent,
    InternshipListComponent,
    InternshipCardComponent,
    FooterComponent,
    StudentNavbarComponent,
    AdminConvocationsComponent,
    StudentInternshipApplicationComponent,
    PersonSkillComponent,
    SkillFilterPipe,
    InternshipDescriptionComponent,
    InstitutionDescriptionComponent,
    ToggleSwitchComponent,
    InstitutionEditComponent,
    InternshipEditComponent,
    StudentEditProfileComponent,
    HomePageComponent,
    RequestedInternshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    AuthenticationGuard,
    {
      provide: NotificationsService,
      useFactory: NotificationsServiceFactory,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

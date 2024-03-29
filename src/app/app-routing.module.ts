import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from './pages/institution-sign-up/institution-sign-up.component';
import { VerificationCodePageComponent } from './pages/verification-code-page/verification-code-page.component';
import { StudentSignUpComponent } from './pages/student-sign-up/student-sign-up.component';
import { GraduateSignUpComponent } from './pages/graduate-sign-up/graduate-sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InternshipFormComponent } from './pages/register-internship/InternshipForm.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeInstitutionComponent } from './pages/home-institution/home-institution.component';
import { HomeAdminInstitutionComponent } from './pages/home-admin-institution/home-admin-institution.component';
import { HomeAdminGraduatesComponent } from './pages/home-admin-graduates/home-admin-graduates.component';
import { ActiveInternshipsPageComponent } from './pages/active-internships-page/active-internships-page.component';
import { InstitutionInternshipDetailsComponent } from './pages/institution-internship-details/institution-internship-details.component';
import { InternshipListComponent } from './pages/internship-list/internship-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminConvocationsComponent } from './pages/admin-convocations/admin-convocations.component';
import { StudentInternshipApplicationComponent } from './pages/student-internship-application/student-internship-application.component';
import { StudentEditProfileComponent } from './pages/student-edit-profile/student-edit-profile.component';
import { InstitutionEditComponent } from './pages/institution-edit/institution-edit.component';
import { InternshipEditComponent } from './pages/internship-edit/internship-edit.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RequestedInternshipsComponent } from './pages/requested-internships/requested-internships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro/estudiante', component: StudentSignUpComponent },
  { path: 'registro/graduado', component: GraduateSignUpComponent },
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
  { path: 'codigo-de-verificacion', component: VerificationCodePageComponent },
  { path: 'administrador/inicio', component: HomeAdminComponent },
  { path: 'institucion/inicio', component: HomeInstitutionComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'administrador/instituciones', component: HomeAdminInstitutionComponent, },
  { path: 'administrador/graduados', component: HomeAdminGraduatesComponent },
  { path: 'institucion/convocatorias/solicitadas', component: RequestedInternshipsComponent },
  { path: 'institucion/convocatorias/nueva', component: InternshipFormComponent, },
  { path: 'institucion/convocatorias', component: ActiveInternshipsPageComponent,},
  { path: 'institucion/convocatorias/:id', component: InstitutionInternshipDetailsComponent, },
  { path: 'home/institucion', component: HomeInstitutionComponent },
  { path: 'pasantias', component: InternshipListComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'administrador/convocatorias', component: AdminConvocationsComponent,},
  { path: 'pasantias/:id', component: StudentInternshipApplicationComponent },
  { path: 'institucion/convocatorias/:id/editar', component: InternshipEditComponent },
  { path: 'institucion/editar', component: InstitutionEditComponent },
  { path: 'estudiante/perfil', component: StudentEditProfileComponent },
  { path: 'estudiante/inicio', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

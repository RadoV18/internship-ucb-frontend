import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from "./pages/institution-sign-up/institution-sign-up.component";
import { VerificationCodePageComponent } from "./pages/verification-code-page/verification-code-page.component";
import { StudentSignUpComponent } from './pages/student-sign-up/student-sign-up.component';
import { GraduateSignUpComponent } from './pages/graduate-sign-up/graduate-sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InternshipFormComponent } from './pages/register-internship/InternshipForm.component';
import { HomeAdminComponent } from "./pages/home-admin/home-admin.component";
import { HomeInstitutionComponent } from "./pages/home-institution/home-institution.component";
import {ActiveInternshipsPageComponent} from "./pages/active-internships-page/active-internships-page.component";
import {
  InstitutionInternshipDetailsComponent
} from "./pages/institution-internship-details/institution-internship-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro-estudiante', component: StudentSignUpComponent },
  { path: 'registro/graduado', component: GraduateSignUpComponent },
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
  { path: 'codigo-de-verificacion', component: VerificationCodePageComponent },
  { path: 'administrador/inicio', component: HomeAdminComponent},
  { path: 'institucion/inicio', component: HomeInstitutionComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'internship', component: InternshipFormComponent },
  { path: 'institucion/convocatorias', component: ActiveInternshipsPageComponent },
  { path: 'institucion/convocatorias/:id', component: InstitutionInternshipDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

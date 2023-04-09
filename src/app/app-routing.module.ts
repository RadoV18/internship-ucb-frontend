import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from "./pages/institution-sign-up/institution-sign-up.component";
import { VerificationCodePageComponent } from "./pages/verification-code-page/verification-code-page.component";
import { StudentSignUpComponent } from './pages/student-sign-up/student-sign-up.component';
import { GraduateSignUpComponent } from './pages/graduate-sign-up/graduate-sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro/estudiante', component: StudentSignUpComponent },
  { path: 'registro/graduado', component: GraduateSignUpComponent },
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
  { path: 'ingresar', component: LoginComponent },
  { path: 'codigo-de-verificacion', component: VerificationCodePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

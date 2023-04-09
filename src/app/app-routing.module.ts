import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from "./pages/institution-sign-up/institution-sign-up.component";
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';
import { VerificationCodePageComponent } from "./pages/verification-code-page/verification-code-page.component";
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InternshipFormComponent } from './pages/register-internship/InternshipForm.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
  { path: 'codigo-de-verificacion', component: VerificationCodePageComponent },
  { path: 'menu-admin', component: MenuAdminComponent},
  { path: 'ingresar', component: LoginComponent },
  { path: 'internship', component: InternshipFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

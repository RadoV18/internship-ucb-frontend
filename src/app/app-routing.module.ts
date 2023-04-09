import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from "./pages/institution-sign-up/institution-sign-up.component";
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';
import { VerificationCodePageComponent } from "./pages/verification-code-page/verification-code-page.component";

const routes: Routes = [
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
  { path: 'codigo-de-verificacion', component: VerificationCodePageComponent },
  { path: 'menu-admin', component: MenuAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

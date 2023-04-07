import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from "./pages/institution-sign-up/institution-sign-up.component";
import { VerificationCodePageComponent } from "./pages/verification-code-page/verification-code-page.component";

const routes: Routes = [
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
  { path: 'codigo-de-verificacion', component: VerificationCodePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

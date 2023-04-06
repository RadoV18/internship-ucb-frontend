import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionSignUpComponent } from "./pages/institution-sign-up/institution-sign-up.component";

const routes: Routes = [
  { path: 'registro/institucion', component: InstitutionSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

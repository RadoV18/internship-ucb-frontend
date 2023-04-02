import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInternshipComponent } from './create-internship/create-internship.component';

const routes: Routes = [
  { path: 'internship', component: CreateInternshipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

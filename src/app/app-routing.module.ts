import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipFormComponent } from './create-internship/InternshipForm.component';

const routes: Routes = [
  { path: 'internship', component: InternshipFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

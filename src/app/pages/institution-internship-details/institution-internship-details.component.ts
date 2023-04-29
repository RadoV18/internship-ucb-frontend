import { Component } from '@angular/core';

@Component({
  selector: 'app-institution-internship-details',
  templateUrl: './institution-internship-details.component.html',
  styleUrls: ['./institution-internship-details.component.css']
})
export class InstitutionInternshipDetailsComponent {
  show: boolean = false;

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-active-internships-page',
  templateUrl: './active-internships-page.component.html',
  styleUrls: ['./active-internships-page.component.css']
})
export class ActiveInternshipsPageComponent {
  show: boolean = false;

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }
}

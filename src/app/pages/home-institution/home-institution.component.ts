import { Component } from '@angular/core';

@Component({
  selector: 'app-home-institution',
  templateUrl: './home-institution.component.html',
  styleUrls: ['./home-institution.component.css']
})
export class HomeInstitutionComponent {
  show: boolean = false;

  toggleSidebar() {
    this.show = !this.show;
  }

  setShow(show: boolean) {
    this.show = show;
  }
}

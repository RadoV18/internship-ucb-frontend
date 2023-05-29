import {Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter();
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu: ElementRef;
  showOptions: boolean = false;

  name: string = 'StudentName';
  profilePicture: string = '/assets/images/user.svg'

  constructor(private renderer: Renderer2, private authService: AuthenticationService) {
    this.name = this.authService.getAuthenticatedUserName() || '';
    this.profilePicture = this.authService.getAuthenticatedUserPicture() || '';
    this.renderer.listen('window', 'click', (e: Event) => {
      if(this.toggleButton.nativeElement.contains(e.target)) {
        this.showOptions = !this.showOptions;
      } else if (e.target !== this.dropdownMenu.nativeElement) {
        this.showOptions = false;
      }
    });
  }
}

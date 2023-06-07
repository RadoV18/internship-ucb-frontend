import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";
import { TsService } from 'src/app/services/ts.service';

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

  isLoggedIn = false;
  username?: string;

  name: string = 'StudentName';
  profilePicture: string = '/assets/images/user.svg'

  constructor(private renderer: Renderer2, private authService: AuthenticationService, private tsService: TsService) {
    this.isLoggedIn = !!this.tsService.getToken();

    if (this.isLoggedIn) {
      const user = this.tsService.getUser();
      this.name = user.name;
      this.profilePicture = user.profilePictureUrl;
    }

    // this.name = this.authService.getAuthenticatedUserName() || '';
    // this.profilePicture = this.authService.getAuthenticatedUserPicture() || '';
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.toggleButton.nativeElement.contains(e.target)) {
        this.showOptions = !this.showOptions;
      } else if (e.target !== this.dropdownMenu.nativeElement) {
        this.showOptions = false;
      }
    });
  }
}

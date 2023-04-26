import {Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-institution-navbar',
  templateUrl: './institution-navbar.component.html',
  styleUrls: ['./institution-navbar.component.css']
})
export class InstitutionNavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter();
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu: ElementRef;
  showOptions: boolean = false;

  name: string = 'InstitutionName';
  profilePicture: string = '/assets/images/user.svg'

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if(this.toggleButton.nativeElement.contains(e.target)) {
        this.showOptions = !this.showOptions;
      } else if (e.target !== this.dropdownMenu.nativeElement) {
        this.showOptions = false;
      }
    });
  }
}

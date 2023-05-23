import {Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter();
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu: ElementRef;
  showOptions: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if(this.toggleButton.nativeElement.contains(e.target)) {
        this.showOptions = !this.showOptions;
      } else if (!this.dropdownMenu.nativeElement.contains(e.target)) {
        this.showOptions = false;
      }
    });
  }
}

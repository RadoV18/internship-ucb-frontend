import {Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-institution-sidebar',
  templateUrl: './institution-sidebar.component.html',
  styleUrls: ['./institution-sidebar.component.css']
})
export class InstitutionSidebarComponent {
  @Input() show: boolean = false;
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();
  private wasClickOutside: boolean = false;

  constructor(private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      if(!this.show)
        return;
      if (!this.wasClickOutside) {
        this.wasClickOutside = true;
      } else {
        this.toggleSidebar();
        this.wasClickOutside = false;
      }
    }
  }

  toggleSidebar() {
    this.show = !this.show;
    this.toggleSidebarEvent.emit(this.show);
  }
}

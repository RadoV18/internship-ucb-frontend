import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {
  @Output() toggleSwitch: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle(event: any) {
    this.toggleSwitch.emit(event.target.checked);
  }
}

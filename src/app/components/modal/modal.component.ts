import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() displayModal: boolean = false;
  @Input() disposable: boolean = false;
  @Output() onDispose: EventEmitter<void> = new EventEmitter();
}

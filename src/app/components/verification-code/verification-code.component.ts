import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent {
  @Input() error: boolean = false;
  @Output() getVerificationCode = new EventEmitter<string>();
  verificationCode: string = '';

  focusNext(event: Event, previousId: string | null, nextId: string | null, last: boolean) {
    const input = event.target as HTMLInputElement;
    if(event instanceof KeyboardEvent) {
      if(event.key === 'Backspace' && previousId) {
        if(this.verificationCode.length > 0) {
          // remove last character
          this.verificationCode = this.verificationCode.slice(0, -1);
        }
        const previous = document.getElementById(previousId);
        if(previous) {
          previous.innerText = '';
          previous.focus();
        }
      }
      // accept only numbers
      input.value = input.value.replace(/\D/g, '');
      const inputLength = input.value.length;
      if (inputLength > 0 && nextId) {
        if(this.verificationCode.length < 6) {
          this.verificationCode += input.value;
        }
        const next = document.getElementById(nextId);
        if(next) {
          next.focus();
        }
        if(last) {
          this.getVerificationCode.emit(this.verificationCode);
        }
      }
    }
  }
}

import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pdf-file-input',
  templateUrl: './pdf-file-input.component.html',
  styleUrls: ['./pdf-file-input.component.css']
})
export class PdfFileInputComponent {

  @Output() fileChanged = new EventEmitter<File>();
  filename: string = '';

  cancel(fileInput: HTMLInputElement) : void {
    fileInput.value = '';
    this.filename = '';
    this.fileChanged.emit();
  }

  setFile(fileInput: HTMLInputElement): void {
    const file : File | null | undefined = fileInput.files?.item(0);
    if(!file) {
      return;
    }
    this.filename = file.name;
    this.fileChanged.emit(file);
  }
}

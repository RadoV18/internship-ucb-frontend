import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent {
  @Output() imageChanged = new EventEmitter<File>();
  defaultImageUrl: string = './assets/images/input-camera.svg'
  imageUrl: string = this.defaultImageUrl;

  previewImage(fileInput: HTMLInputElement): void {
    const file : File | null | undefined = fileInput.files?.item(0);
    if(!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
    this.imageChanged.emit(file);
  }
}

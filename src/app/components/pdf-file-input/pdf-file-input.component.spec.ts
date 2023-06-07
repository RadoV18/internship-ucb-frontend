import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFileInputComponent } from './pdf-file-input.component';

describe('PdfFileInputComponent', () => {
  let component: PdfFileInputComponent;
  let fixture: ComponentFixture<PdfFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfFileInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCodePageComponent } from './verification-code-page.component';

describe('VerificationCodeComponent', () => {
  let component: VerificationCodePageComponent;
  let fixture: ComponentFixture<VerificationCodePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationCodePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationCodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

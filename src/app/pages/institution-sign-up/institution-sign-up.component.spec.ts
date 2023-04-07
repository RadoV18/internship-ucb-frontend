import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionSignUpComponent } from './institution-sign-up.component';

describe('InstitutionSignUpComponent', () => {
  let component: InstitutionSignUpComponent;
  let fixture: ComponentFixture<InstitutionSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

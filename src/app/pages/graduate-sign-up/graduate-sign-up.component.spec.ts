import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateSignUpComponent } from './graduate-sign-up.component';

describe('GraduateSignUpComponent', () => {
  let component: GraduateSignUpComponent;
  let fixture: ComponentFixture<GraduateSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduateSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInternshipApplicationComponent } from './student-internship-application.component';

describe('StudentInternshipApplicationComponent', () => {
  let component: StudentInternshipApplicationComponent;
  let fixture: ComponentFixture<StudentInternshipApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInternshipApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInternshipApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

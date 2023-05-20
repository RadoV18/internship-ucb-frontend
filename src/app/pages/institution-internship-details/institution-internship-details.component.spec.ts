import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionInternshipDetailsComponent } from './institution-internship-details.component';

describe('InstitutionInternshipDetailsComponent', () => {
  let component: InstitutionInternshipDetailsComponent;
  let fixture: ComponentFixture<InstitutionInternshipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionInternshipDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionInternshipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

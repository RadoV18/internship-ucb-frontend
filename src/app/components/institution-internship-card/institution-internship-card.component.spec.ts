import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionInternshipCardComponent } from './institution-internship-card.component';

describe('InstitutionInternshipCardComponent', () => {
  let component: InstitutionInternshipCardComponent;
  let fixture: ComponentFixture<InstitutionInternshipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionInternshipCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionInternshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

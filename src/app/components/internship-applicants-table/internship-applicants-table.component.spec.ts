import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipApplicantsTableComponent } from './internship-applicants-table.component';

describe('InternshipApplicantsTableComponent', () => {
  let component: InternshipApplicantsTableComponent;
  let fixture: ComponentFixture<InternshipApplicantsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipApplicantsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipApplicantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

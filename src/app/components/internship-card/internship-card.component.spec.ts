import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipCardComponent } from './internship-card.component';

describe('InternshipCardComponent', () => {
  let component: InternshipCardComponent;
  let fixture: ComponentFixture<InternshipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

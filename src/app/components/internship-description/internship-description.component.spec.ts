import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipDescriptionComponent } from './internship-description.component';

describe('InternshipDescriptionComponent', () => {
  let component: InternshipDescriptionComponent;
  let fixture: ComponentFixture<InternshipDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

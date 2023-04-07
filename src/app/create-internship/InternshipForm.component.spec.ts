import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipFormComponent } from './InternshipForm.component';

describe('CreateInternshipComponent', () => {
  let component: InternshipFormComponent;
  let fixture: ComponentFixture<InternshipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternshipFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

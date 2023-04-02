import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInternshipComponent } from './create-internship.component';

describe('CreateInternshipComponent', () => {
  let component: CreateInternshipComponent;
  let fixture: ComponentFixture<CreateInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInternshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

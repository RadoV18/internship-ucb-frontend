import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionDescriptionComponent } from './institution-description.component';

describe('InstitutionDescriptionComponent', () => {
  let component: InstitutionDescriptionComponent;
  let fixture: ComponentFixture<InstitutionDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionEditComponent } from './institution-edit.component';

describe('InstitutionEditComponent', () => {
  let component: InstitutionEditComponent;
  let fixture: ComponentFixture<InstitutionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

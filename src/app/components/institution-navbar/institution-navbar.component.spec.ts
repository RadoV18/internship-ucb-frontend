import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionNavbarComponent } from './institution-navbar.component';

describe('InstitutionNavbarComponent', () => {
  let component: InstitutionNavbarComponent;
  let fixture: ComponentFixture<InstitutionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

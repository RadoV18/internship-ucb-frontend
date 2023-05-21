import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminInstitutionComponent } from './home-admin-institution.component';

describe('HomeAdminInstitutionComponent', () => {
  let component: HomeAdminInstitutionComponent;
  let fixture: ComponentFixture<HomeAdminInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

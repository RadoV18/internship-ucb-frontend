import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstitutionComponent } from './home-institution.component';

describe('HomeInstitutionComponent', () => {
  let component: HomeInstitutionComponent;
  let fixture: ComponentFixture<HomeInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

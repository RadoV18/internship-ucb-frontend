import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminGraduatesComponent } from './home-admin-graduates.component';

describe('HomeAdminGraduatesComponent', () => {
  let component: HomeAdminGraduatesComponent;
  let fixture: ComponentFixture<HomeAdminGraduatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminGraduatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminGraduatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConvocationsComponent } from './admin-convocations.component';

describe('AdminConvocationsComponent', () => {
  let component: AdminConvocationsComponent;
  let fixture: ComponentFixture<AdminConvocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConvocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConvocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionSidebarComponent } from './institution-sidebar.component';

describe('InstitutionSidebarComponent', () => {
  let component: InstitutionSidebarComponent;
  let fixture: ComponentFixture<InstitutionSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

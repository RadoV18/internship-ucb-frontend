import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInternshipsPageComponent } from './active-internships-page.component';

describe('ActiveInternshipsPageComponent', () => {
  let component: ActiveInternshipsPageComponent;
  let fixture: ComponentFixture<ActiveInternshipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveInternshipsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveInternshipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

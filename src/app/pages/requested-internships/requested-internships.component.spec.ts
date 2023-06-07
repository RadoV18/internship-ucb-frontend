import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedInternshipsComponent } from './requested-internships.component';

describe('RequestedInternshipsComponent', () => {
  let component: RequestedInternshipsComponent;
  let fixture: ComponentFixture<RequestedInternshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedInternshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

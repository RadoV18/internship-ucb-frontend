import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSkillComponent } from './person-skill.component';

describe('PersonSkillComponent', () => {
  let component: PersonSkillComponent;
  let fixture: ComponentFixture<PersonSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

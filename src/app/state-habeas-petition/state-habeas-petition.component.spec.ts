import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateHabeasPetitionComponent } from './state-habeas-petition.component';

describe('StateHabeasPetitionComponent', () => {
  let component: StateHabeasPetitionComponent;
  let fixture: ComponentFixture<StateHabeasPetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateHabeasPetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateHabeasPetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

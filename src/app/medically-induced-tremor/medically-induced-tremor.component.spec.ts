import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicallyInducedTremorComponent } from './medically-induced-tremor.component';

describe('MedicallyInducedTremorComponent', () => {
  let component: MedicallyInducedTremorComponent;
  let fixture: ComponentFixture<MedicallyInducedTremorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicallyInducedTremorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicallyInducedTremorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

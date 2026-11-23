import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionForMurderComponent } from './prescription-for-murder.component';

describe('PrescriptionForMurderComponent', () => {
  let component: PrescriptionForMurderComponent;
  let fixture: ComponentFixture<PrescriptionForMurderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionForMurderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionForMurderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

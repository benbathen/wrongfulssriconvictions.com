import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicatingNormalComponent } from './medicating-normal.component';

describe('MedicatingNormalComponent', () => {
  let component: MedicatingNormalComponent;
  let fixture: ComponentFixture<MedicatingNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicatingNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicatingNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

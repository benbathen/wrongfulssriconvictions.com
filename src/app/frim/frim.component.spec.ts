import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrimComponent } from './frim.component';

describe('FrimComponent', () => {
  let component: FrimComponent;
  let fixture: ComponentFixture<FrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

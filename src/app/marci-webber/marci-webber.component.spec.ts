import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarciWebberComponent } from './marci-webber.component';

describe('MarciWebberComponent', () => {
  let component: MarciWebberComponent;
  let fixture: ComponentFixture<MarciWebberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarciWebberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarciWebberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatinkaBlackfordNewmanComponent } from './katinka-blackford-newman.component';

describe('KatinkaBlackfordNewmanComponent', () => {
  let component: KatinkaBlackfordNewmanComponent;
  let fixture: ComponentFixture<KatinkaBlackfordNewmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatinkaBlackfordNewmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KatinkaBlackfordNewmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

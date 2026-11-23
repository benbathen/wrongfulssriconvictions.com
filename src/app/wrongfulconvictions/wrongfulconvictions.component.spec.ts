import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongfulconvictionsComponent } from './wrongfulconvictions.component';

describe('WrongfulconvictionsComponent', () => {
  let component: WrongfulconvictionsComponent;
  let fixture: ComponentFixture<WrongfulconvictionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongfulconvictionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongfulconvictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

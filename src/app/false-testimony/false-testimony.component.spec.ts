import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalseTestimonyComponent } from './false-testimony.component';

describe('FalseTestimonyComponent', () => {
  let component: FalseTestimonyComponent;
  let fixture: ComponentFixture<FalseTestimonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalseTestimonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FalseTestimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

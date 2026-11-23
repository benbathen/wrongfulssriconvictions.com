import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GofundmeComponent } from './gofundme.component';

describe('GofundmeComponent', () => {
  let component: GofundmeComponent;
  let fixture: ComponentFixture<GofundmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GofundmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GofundmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

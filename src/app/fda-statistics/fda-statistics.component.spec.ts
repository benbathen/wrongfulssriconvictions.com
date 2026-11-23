import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaStatisticsComponent } from './fda-statistics.component';

describe('FdaStatisticsComponent', () => {
  let component: FdaStatisticsComponent;
  let fixture: ComponentFixture<FdaStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdaStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdaStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaDetailedReportsComponent } from './fda-detailed-reports.component';

describe('FdaDetailedReportsComponent', () => {
  let component: FdaDetailedReportsComponent;
  let fixture: ComponentFixture<FdaDetailedReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdaDetailedReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdaDetailedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaHearingVideosComponent } from './fda-hearing-videos.component';

describe('FdaHearingVideosComponent', () => {
  let component: FdaHearingVideosComponent;
  let fixture: ComponentFixture<FdaHearingVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdaHearingVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdaHearingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

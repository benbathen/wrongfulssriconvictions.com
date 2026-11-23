import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaHearingTranscriptsComponent } from './fda-hearing-transcripts.component';

describe('FdaHearingTranscriptsComponent', () => {
  let component: FdaHearingTranscriptsComponent;
  let fixture: ComponentFixture<FdaHearingTranscriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdaHearingTranscriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdaHearingTranscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

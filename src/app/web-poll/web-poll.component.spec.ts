import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPollComponent } from './web-poll.component';

describe('WebPollComponent', () => {
  let component: WebPollComponent;
  let fixture: ComponentFixture<WebPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

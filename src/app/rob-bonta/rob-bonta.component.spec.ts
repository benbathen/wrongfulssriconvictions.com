import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobBontaComponent } from './rob-bonta.component';

describe('RobBontaComponent', () => {
  let component: RobBontaComponent;
  let fixture: ComponentFixture<RobBontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobBontaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobBontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

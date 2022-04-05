import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkathisiaComponent } from './akathisia.component';

describe('AkathisiaComponent', () => {
  let component: AkathisiaComponent;
  let fixture: ComponentFixture<AkathisiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkathisiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkathisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

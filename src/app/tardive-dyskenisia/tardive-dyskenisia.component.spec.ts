import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TardiveDyskenisiaComponent } from './tardive-dyskenisia.component';

describe('TardiveDyskenisiaComponent', () => {
  let component: TardiveDyskenisiaComponent;
  let fixture: ComponentFixture<TardiveDyskenisiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TardiveDyskenisiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TardiveDyskenisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

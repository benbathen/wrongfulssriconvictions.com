import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathenDeclarationComponent } from './bathen-declaration.component';

describe('BathenDeclarationComponent', () => {
  let component: BathenDeclarationComponent;
  let fixture: ComponentFixture<BathenDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathenDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BathenDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

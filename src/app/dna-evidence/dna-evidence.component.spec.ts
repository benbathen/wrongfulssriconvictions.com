import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaEvidenceComponent } from './dna-evidence.component';

describe('DnaEvidenceComponent', () => {
  let component: DnaEvidenceComponent;
  let fixture: ComponentFixture<DnaEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnaEvidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnaEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

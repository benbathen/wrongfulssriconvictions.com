import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dna-evidence',
  templateUrl: './dna-evidence.component.html',
  styleUrls: ['./dna-evidence.component.sass']
})
export class DnaEvidenceComponent implements OnInit {

  eikelenboomPath = "/assets/pdf/CYP_450_DNA_ANALYSIS_EIKELENBOOM.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}

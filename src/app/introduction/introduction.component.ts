import { Component, OnInit } from '@angular/core';
import { FaersServiceService } from '../faers-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.sass']
})
export class IntroductionComponent implements OnInit {

  public dna_evidence = "dna_evidence";
  public medicationguide = "/assets/pdf/Lexapro_Medication_Guide.pdf";


  constructor(public service: FaersServiceService) {

   }

  ngOnInit(): void {

  }

}

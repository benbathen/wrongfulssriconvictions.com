import { Component, OnInit } from '@angular/core';
import { FaersServiceService } from '../faers-service.service';

@Component({
  selector: 'app-false-testimony',
  templateUrl: './false-testimony.component.html',
  styleUrls: ['./false-testimony.component.sass']
})
export class FalseTestimonyComponent implements OnInit {

  public pdfSrc = "/assets/pdf/false_testimony/jacobs_testimony.pdf"
  public perjurySrc = "/assets/pdf/false_testimony/California_Perjury.pdf"
  public continueToMakeItWorkSrc = "/assets/pdf/false_testimony/continueToMakeItWork.pdf"
  public HarmonixSrc = "/assets/pdf/false_testimony/Harmonix_Employment_Verification.pdf"
  public phoneBill = "/assets/pdf/175272052-2008-09-25.pdf"


  constructor(public service: FaersServiceService) {

  }

  ngOnInit(): void {

  }

}

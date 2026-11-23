import { Component, OnInit } from '@angular/core';
import { FaersServiceService } from '../faers-service.service';

@Component({
  selector: 'app-katinka-blackford-newman',
  templateUrl: './katinka-blackford-newman.component.html',
  styleUrls: ['./katinka-blackford-newman.component.sass']
})
export class KatinkaBlackfordNewmanComponent implements OnInit {

  public path = "assets/pdf/Katinka_Blackford_Newman.pdf";

  constructor(public service: FaersServiceService) { }

  ngOnInit(): void {
  }

}

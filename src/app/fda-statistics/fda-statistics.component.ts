import { Component, OnInit } from '@angular/core';
import { FaersServiceService, FaersResponseObject } from '../faers-service.service';


@Component({
  selector: 'app-fda-statistics',
  templateUrl: './fda-statistics.component.html',
  styleUrls: ['./fda-statistics.component.sass']
})
export class FdaStatisticsComponent implements OnInit {



  constructor(public service: FaersServiceService) {

  }

  ngOnInit(): void {

  }

}

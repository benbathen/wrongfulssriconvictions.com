import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fda-hearing-videos',
  templateUrl: './fda-hearing-videos.component.html',
  styleUrls: ['./fda-hearing-videos.component.sass']
})
export class FdaHearingVideosComponent implements OnInit {

  public videos = ["TuckerMoneymaker_1991.mp4", "AnnBlakeTracey_Sept_2004.mp4", "MargaretMcCaffrey.mp4", "RickMack_1991.mp4", "PeterBreggin_Dec_2006.mp4"];

  constructor() { }

  ngOnInit(): void {
  }

}

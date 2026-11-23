import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immediate',
  templateUrl: './immediate.component.html',
  styleUrls: ['./immediate.component.sass']
})
export class ImmediateComponent implements OnInit {
  public markers = [];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }



}

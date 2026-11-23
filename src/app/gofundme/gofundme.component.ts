import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gofundme',
  templateUrl: './gofundme.component.html',
  styleUrls: ['./gofundme.component.sass']
})
export class GofundmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  redirect(){
    window.location.href = 'https://www.gofundme.com/f/ytgpe-ben-bathen-legal-defense-fund?member=17003019&utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer' ;
  }
}

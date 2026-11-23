import { Component, OnInit } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-frim',
  templateUrl: './frim.component.html',
  styleUrls: ['./frim.component.sass']
})
export class FrimComponent implements OnInit {

  jpgPath = "/assets/pdf/FRIM.JPG"
  path ="/assets/pdf/Ben Bathen. Discovery. Cell Tower Maps.pdf"

  constructor() { }

  ngOnInit(): void {
  }

}

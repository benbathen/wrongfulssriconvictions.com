import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-scientific-research',
  templateUrl: './scientific-research.component.html',
  styleUrls: ['./scientific-research.component.sass']
})
export class ScientificResearchComponent implements OnInit {

  constructor(sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
  }

}

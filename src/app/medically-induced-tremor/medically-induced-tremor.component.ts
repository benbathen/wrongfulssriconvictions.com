import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medically-induced-tremor',
  templateUrl: './medically-induced-tremor.component.html',
  styleUrls: ['./medically-induced-tremor.component.sass']
})
export class MedicallyInducedTremorComponent implements OnInit {

  public mitPath = "/assets/pdf/medically_induced_tremor/Jacobs_Victim_Impact_Statement.pdf";

  constructor() { }

  ngOnInit(): void {
  }

}

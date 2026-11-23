import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-patients',
  templateUrl: './other-patients.component.html',
  styleUrls: ['./other-patients.component.sass']
})
export class OtherPatientsComponent implements OnInit {

  crespiPath = "/assets/pdf/ThibaultDeclarations/DavidCrespiDeclaration.pdf";
  pittmanPath = "/assets/pdf/ThibaultDeclarations/ChristopherPittmanDeclaration.pdf";
  carmichaelPath = "/assets/pdf/ThibaultDeclarations/DavidCarmichaelDeclaration.pdf"
  joubranPath = "/assets/pdf/Feheley_V_Forrest_Laboratories.pdf";
  danyshPath = "/assets/pdf/ThibaultDeclarations/KurtDanyshDeclaration.pdf";
  demenuikPath = "/assets/pdf/ThibaultDeclarations/LeslieDemenuikDeclaration.pdf";
  patient = 'joubran';

  constructor() { }

  ngOnInit(): void {
  }

  displayVictim(victimName: string) {
    this.patient = victimName.toLowerCase();
    const element = document.getElementById(this.patient);
    element?.scrollIntoView();
    element?.scrollIntoView();
    return this.patient;
  }

}

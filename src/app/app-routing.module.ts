import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkathisiaComponent } from './akathisia/akathisia.component';
import { BathenDeclarationComponent } from './bathen-declaration/bathen-declaration.component';
import { DnaEvidenceComponent } from './dna-evidence/dna-evidence.component';
import { FdaDetailedReportsComponent } from './fda-detailed-reports/fda-detailed-reports.component';
import { FdaHearingTranscriptsComponent } from './fda-hearing-transcripts/fda-hearing-transcripts.component';
import { FdaHearingVideosComponent } from './fda-hearing-videos/fda-hearing-videos.component';
import { FdaStatisticsComponent } from './fda-statistics/fda-statistics.component';
import { GofundmeComponent } from './gofundme/gofundme.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { KatinkaBlackfordNewmanComponent } from './katinka-blackford-newman/katinka-blackford-newman.component';
import { MedicatingNormalComponent } from './medicating-normal/medicating-normal.component';
import { PrescriptionForMurderComponent } from './prescription-for-murder/prescription-for-murder.component';
import { StateHabeasPetitionComponent } from './state-habeas-petition/state-habeas-petition.component';
import { TranscriptComponent } from './transcript/transcript.component';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { ScientificResearchComponent } from './scientific-research/scientific-research.component';
import { FalseTestimonyComponent } from './false-testimony/false-testimony.component';
import { FrimComponent } from './frim/frim.component';
import { OtherPatientsComponent } from './other-patients/other-patients.component';
import { ContactComponent } from './contact/contact.component';
import { MarciWebberComponent } from './marci-webber/marci-webber.component';
import { MedicallyInducedTremorComponent } from './medically-induced-tremor/medically-induced-tremor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: 'introduction' , component: IntroductionComponent},
  {path: 'state-habeas-petition', component: StateHabeasPetitionComponent},
  {path: 'dna_evidence', component: DnaEvidenceComponent},
  {path: 'false_testimony', component: FalseTestimonyComponent},
  {path: 'frim', component: FrimComponent},
  {path: 'transcript', component: TranscriptComponent},
  {path: 'fda-hearing-transcript', component: FdaHearingTranscriptsComponent},
  {path: 'fda-detailed-reports', component: FdaDetailedReportsComponent},
  {path: 'akathisia', component: AkathisiaComponent},
  {path: 'fda-statistics', component: FdaStatisticsComponent},
  {path: 'other-patients', component: OtherPatientsComponent},
  {path: 'scientific-research', component: ScientificResearchComponent},
  {path: 'fda-hearing-videos', component: FdaHearingVideosComponent},
  {path: 'medically_induced_tremor', component: MedicallyInducedTremorComponent},
  {path: 'katinka-blackford-newman', component: KatinkaBlackfordNewmanComponent},
  {path: 'medicating_normal' , component: MedicatingNormalComponent},
  {path: 'marci_webber', component: MarciWebberComponent},
  {path: 'prescription_for_murder', component: PrescriptionForMurderComponent},
  {path: 'gofundme', component: GofundmeComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'introduction' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, BrowserModule, CommonModule], 
  exports: [RouterModule],
  providers: [
    {
        provide: 'externalUrlRedirectResolver',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        {
            window.location.href = (route.data as any).externalUrl;
        }
    }
]
})
export class AppRoutingModule { }

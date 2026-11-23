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
import { RedactComponent } from './redact/redact.component';
import { LawComponent } from './law/law.component';
import { ImmediateComponent } from './immediate/immediate.component';
import { IacComponent } from './iac/iac.component';
//import { LinksComponent } from './links/links.component';
import { ForrestComponent } from './forrest/forrest.component';
import { RobBontaComponent } from './rob-bonta/rob-bonta.component';
import { InterviewComponent } from './interview/interview.component';
import { ResultsComponent } from './results/results.component';
import { StoriesComponent } from './stories/stories.component';
import { TardiveDyskenisiaComponent } from './tardive-dyskenisia/tardive-dyskenisia.component';
import { WebPollComponent } from './web-poll/web-poll.component';
import { CommentsComponent } from './comments/comments.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



const routes: Routes = [
  {path: 'wrongful_convictions' , component: IntroductionComponent},
  {path: 'introduction' , component: IntroductionComponent},
  {path: 'state-habeas-petition', component: StateHabeasPetitionComponent},
  {path: 'dna_evidence', component: DnaEvidenceComponent},
  {path: 'false_testimony', component: FalseTestimonyComponent},
  {path: 'frim', component: FrimComponent},
  {path: 'transcript', component: TranscriptComponent},
  {path: 'fda-hearing-transcript', component: FdaHearingTranscriptsComponent},
  {path: 'fda-detailed-reports', component: FdaDetailedReportsComponent},
  {path: 'akathisia', component: AkathisiaComponent},
  {path: 'tardive-dyskenisia', component: TardiveDyskenisiaComponent},
  {path: 'fda-statistics', component: FdaStatisticsComponent},
  {path: 'other-patients', component: OtherPatientsComponent},
  {path: 'scientific-research', component: ScientificResearchComponent},
  {path: 'fda-hearing-videos', component: FdaHearingVideosComponent},
  {path: 'medically_induced_tremor', component: MedicallyInducedTremorComponent},
  {path: 'katinka-blackford-newman', component: KatinkaBlackfordNewmanComponent},
  {path: 'medicating_normal' , component: MedicatingNormalComponent},
  {path: 'marci_webber', component: MarciWebberComponent},
  {path: 'prescription_for_murder', component: PrescriptionForMurderComponent},
  {path: 'law', component: LawComponent},
 // {path: 'links', component: LinksComponent},
  {path: 'gofundme', component: GofundmeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'redact', component: RedactComponent},
  {path: 'immediate', component: ImmediateComponent},
  {path: 'forrest', component: ForrestComponent},
  {path: 'iac', component: IacComponent},
  {path: 'rob-bonta', component: RobBontaComponent},
  {path: 'interview', component: InterviewComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'web-poll', component: WebPollComponent},
  {path: 'comments', component: CommentsComponent},
  {path: '**', redirectTo: 'introduction' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule, BrowserModule, CommonModule, PdfViewerModule], 
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

export { RouterModule };

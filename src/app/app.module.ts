import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BathenDeclarationComponent } from './bathen-declaration/bathen-declaration.component';
import { MedicatingNormalComponent } from './medicating-normal/medicating-normal.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { FdaHearingVideosComponent } from './fda-hearing-videos/fda-hearing-videos.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DnaEvidenceComponent } from './dna-evidence/dna-evidence.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { FdaHearingTranscriptsComponent } from './fda-hearing-transcripts/fda-hearing-transcripts.component';
import { FdaStatisticsComponent } from './fda-statistics/fda-statistics.component';
import { StateHabeasPetitionComponent } from './state-habeas-petition/state-habeas-petition.component';
import { FdaDetailedReportsComponent } from './fda-detailed-reports/fda-detailed-reports.component';
import { GofundmeComponent } from './gofundme/gofundme.component';
import { PrescriptionForMurderComponent } from './prescription-for-murder/prescription-for-murder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'ng2-tooltip-directive';
import { KatinkaBlackfordNewmanComponent } from './katinka-blackford-newman/katinka-blackford-newman.component';
import { ScientificResearchComponent } from './scientific-research/scientific-research.component';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 
import { FalseTestimonyComponent } from './false-testimony/false-testimony.component';
import { FrimComponent } from './frim/frim.component';
import { OtherPatientsComponent } from './other-patients/other-patients.component';
import { ContactComponent } from './contact/contact.component';
import { MarciWebberComponent } from './marci-webber/marci-webber.component';
import { MedicallyInducedTremorComponent } from './medically-induced-tremor/medically-induced-tremor.component';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RedactComponent } from './redact/redact.component';
import { LawComponent } from './law/law.component';
import { ImmediateComponent } from './immediate/immediate.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { IacComponent } from './iac/iac.component';
// import { LinksComponent } from './links/links.component';
import { ForrestComponent } from './forrest/forrest.component';
import { RobBontaComponent } from './rob-bonta/rob-bonta.component';
import { InterviewComponent } from './interview/interview.component';
import { ResultsComponent } from './results/results.component';
import { StoriesComponent } from './stories/stories.component';
import { TardiveDyskenisiaComponent } from './tardive-dyskenisia/tardive-dyskenisia.component';
import { WrongfulconvictionsComponent } from './wrongfulconvictions/wrongfulconvictions.component';
import { WebPollComponent } from './web-poll/web-poll.component'
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CommentsComponent } from './comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    BathenDeclarationComponent,
    MedicatingNormalComponent,
    NavigationPanelComponent,
    FdaHearingVideosComponent,
    IntroductionComponent,
    DnaEvidenceComponent,
    TranscriptComponent,
    FdaHearingTranscriptsComponent,
    FdaStatisticsComponent,
    StateHabeasPetitionComponent,
    FdaDetailedReportsComponent,
    GofundmeComponent,
    PrescriptionForMurderComponent,
    KatinkaBlackfordNewmanComponent,
    ScientificResearchComponent,
    FalseTestimonyComponent,
    FrimComponent,
    OtherPatientsComponent,
    ContactComponent,
    MarciWebberComponent,
    MedicallyInducedTremorComponent,
    RedactComponent,
    LawComponent,
    ImmediateComponent,
    IacComponent,
    // LinksComponent,
    ForrestComponent,
    RobBontaComponent,
    InterviewComponent,
    ResultsComponent,
    StoriesComponent,
    TardiveDyskenisiaComponent,
    WrongfulconvictionsComponent,
    WebPollComponent,
    TestComponent,
    CommentsComponent,
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    TooltipModule,
    PdfViewerModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

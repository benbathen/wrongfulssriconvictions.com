import { Component, OnInit } from '@angular/core';
import { FaersServiceService } from '../faers-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  public emailaddress = "CASRU@sdcda.org";
  public cc = `Kristen.Chenelia@doj.ca.gov; Greg.gain@sdcda.org; cherie.somerville@sdcda.org; joel.madero@sdcda.org; michael.runyon@sdcda.org; wendy.patrick@sdcda.org; lisa.weinreb@sdcda.org; brendan.mchugh@sdcda.org;
  rachel.solov@sdcda.org; sandiegoda@sdcda.org; webteam@sdcda.org; jorge.duran@sdcda.org;
  paul.libassi@sdcda.org; keith.lollis@sdcda.org; alberto.martinez@sdcda.org; tracy.prior@sdcda.org;
  terra.marroquin@sdcda.org; justin.smith@sdcda.org;
  cally.bright@sdcda.org; tori.mullenix@sdcda.org; ted.fiorito@sdcda.org; michael.ancheta@sdcda.org; mel.sosa@sdcda.org; tanya.sierra@sdcda.org; ana.desantiago@sdcda.org;
  cameron.celeste@sdcda.org;
  tom.manning@sdcda.org;
  jesse.navarro@sdcda.org; dominic.dugo@sdcda.org;
  paul.greenwood@sdcda.org;
  felix.salazar@sdcda.org;
  trisha.amador@sdcda.org;
  patrick.otoole@sdcda.org;
  charles.nguyen@sdcda.org; wendy.mazzarella@sdcda.org;
  leah.wong@sdcda.org; consumer@sdcda.org; publicaffairs@sdcda.org;
  allison.matthews@sdcda.org;
  monique.myers@sdcda.org;
  mark.amador@sdcda.org;
  cmarti@sdcda.org;
  taylor.williams@sdcda.org;
  marco.mercado@sdcda.org;
  czerwinski@sdcda.org; suzanne.patterson@sdcda.org; richard.king@sdcda.org;
  danielle.fair@sdcda.org;
  james.kelly@sdcda.org;
  james.hoefer@sdcda.org;
  patricia.ramirez@sdcda.org;
  kelly.rand@sdcda.org;
  anthony.johnson@sdcda.org;
  lisbet.perez@sdcda.org;
  victor.nunez@sdcda.org; publicinformation@sdcda.org; workplacejustice@sdcda.org; sdconnect@sdcda.org; paul.greewood@sdcda.org; reform@sdcda.org; casru@sdcda.org;
  hatecrimes@sdcda.org;
  marla.kingkade@sdcda.org;
  michelle.ialeggio@sdcda.org; fanny.yu@sdcda.org; hrdirect@sdcda.org; public.affairs@sdcda.org;
  daexecutivesecretary@sdcda.org; realestatefraudcomplaints@sdcda.org; siboney.salgado-montalvo@sdcda.org; communitygrant @sdcda.org; lisa.weinreb@sdcda.org;
da.appellate@sdcda.org; jihan.yacoub@sdcda.org; melvin.cuellar@sdcda.org; shane.lynn@sdcda.org; james.simmons@sdcda.org; diane.alvarez@sdcda.org;
robert.eacret@sdcda.org; robert.dean@sdcda.org; matthew.williams@sdcda.org; donald.holmes@sdcda.org; ctooth @sdcda.org; robbonta@comcast.net; rob@robbonta.com; rob.bonta@doj.ca.gov; rob.bonta@ca.gov; robbonta@ca.gov; kristenchenelia@yahoo.com;  kristenkinnaird@aol.com; Kristen.Chenelia@doj.ca.gov; Greg.gain@sdcda.org; cherie.somerville@sdcda.org; joel.madero@sdcda.org; benjamin.theule@sdcounty.ca.gov; btheule@gmail.com; ben@theulelaw.com; benjamintheule@co.imperial.ca.us; summer.stephan@sdcda.org; ssontag@cox.net;`;
  public subject = "";
  public message = "%0d%0aIt's impossible for patients to notice symptoms of Akathisia or Tardive Dyskensia in themselves.  %0d%0a Why don't you prosecute the doctor who broke the law in California instead of the victim of medical malpractice outside of California?%0d%0a"

  public additionalSentences = ["Is the goal of the California Attorney General's office to help doctors who lie under oath to recommend amphetimine like stimulants that cause Homicide and Suicide in california?",
    "Is it illegal to lie under oath?",
    "I'm very disappointed in the California Attorney General's office.",
    "How could a patient recognize Akathisia or Tardive Dyskenisia when most doctors can not?",
    "Please tell the truth in the Ninth Circuit.",
    "Is the San Diego District attorney's office supposed to help doctors without licenses push dope in Chula Vista?",
    "Nobody deliberately gives themselves Akathisia."];

  constructor(public service: FaersServiceService) {

  }

  ngOnInit(): void {
    const index = Math.floor(Math.random() * (this.additionalSentences.length + 1));
    this.subject = this.additionalSentences[index];
    this.message += "%0d%0a" + this.additionalSentences[index] + "%0d%0a";
    this.message += "%0d%0a4018 medically induced suicides attributed to Lexapro isn't enough?%0d%0a";
  }

}

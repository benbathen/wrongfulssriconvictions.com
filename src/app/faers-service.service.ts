import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface FaersResponseObject {
  meta: FaersMetaObject,
  results: FaersResultObject[],
}

export interface FaersMetaObject {
  disclaimer: string,
  terms: string,
  license: string,
  last_updated: string,
  results: {
    skip: number,
    limit: number,
    total: number
  }
}

export interface FaersResultObject {
  companynumb: string,
  duplicate: number,
  fulfillexpeditecriteria: number,
  occurcountry: string,
  patient: FaersPatientObject,
  primarysource: { reportercountry: string, qualification: number }
  primarysourcecountry: string
  receiptdate: string
  receiptdateformat: string
  receivedate: string
  receivedateformat: number
  receiver: { receivertype: number, receiverorganization: string }
  reportduplicate: { duplicatesource: string, duplicatenumb: string }
  reporttype: number
  safetyreportid: number
  safetyreportversion: number
  sender: { sendertype: number, senderorganization: string }
  serious: number
  seriousnessother: number
  transmissiondate: string
  transmissiondateformat: number
}

export interface FaersPatientObject {
  patientagegroup: number,
  patientsex: number,
  reaction: FaersReactionObject[],
  drug: FaersDrugObject[],
  summary: string
}

export interface FaersReactionObject {
  reactionmeddrapt: string
}

export interface FaersDrugObject {
  drugcharacterization: number,
  medicinalproduct: string,
  drugbatchnumb: number,
  drugauthorizationnumb: number,
  drugseparatedosagenumb: number,
  drugintervaldosageunitnumb: number,
  drugintervaldosagedefinition: number,
  drugdosagetext: string,
  drugdosageform: string,
  drugadministrationroute: string,
  drugindication: string,
  drugstartdateformat: number,
  drugstartdate: string
  actiondrug: number,
  activesubstance: {
    activesubstancename: string
  },
  openfda: FaersOpenFdaObject,
}

export interface FaersOpenFdaObject {
  application_number: string[],
  brand_name: string[],
  generic_name: string[],
  manufacturer_name: string[],
  product_ndc: string[],
  product_type: string[],
  route: string[],
  substance_name: string[],
  spl_id: string[],
  spl_set_id: string[],
  package_ndc: string[],
  unii: string[]
}

@Injectable({
  providedIn: 'root'
})
export class FaersServiceService {

  drugs = ['escitalopram', 'fluoxetine'];
  response: any;
  results: any;
  searchTerms: string[];
  stats = new Map<string, number>();
  public cell = false;
  width: number = 1280;
  height: number = (this.width / 3) * 2;

  constructor(private httpClient: HttpClient) {
    this.searchTerms = ['Acute Psychosis', 'GunShot Wound', 'Homicidal Ideation', 'Inapropriate Sexual Behavior', 'Confusional State', 'Suicidal Ideation', 'Intentional Self Injury', 'Homicide', 'Completed Suicide', 'Memory Impairment', 'Screaming', 'Disorientation', 'Imprisonment', 'Tardive Dyskenisia', 'Akathisia'];
    this.searchTerms.sort();
    this.searchTerms.forEach((searchterm) => {
      this.getLexaproStatistics(searchterm).subscribe((response) => {
        this.response = response;
        this.results = this.response.results;
        this.stats.set(searchterm, response.meta.results.total);
      });
    });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      this.cell = true;
    }

    this.width = screen.width;
    this.height = (this.width / 4) * 3;
  }

  getLexaproStatistics(searchTerm: string): Observable<FaersResponseObject> {
    const searchURL = 'https://api.fda.gov/drug/event.json?search=(escitalopram)+AND+(' + searchTerm + ')&limit=100';
    return this.httpClient.get(searchURL) as Observable<FaersResponseObject>;
  }

  getGoogleAnalyticsData(){
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const CLIENT_ID = 'G-8YE7QMZHQD';
    
    const todayString = yyyy + '/' + mm + '/' + dd;

    const body = {
      viewId: "1",
    };
    this.httpClient.post('https://analyticsreporting.googleapis.com/v4/userActivity:search', body);
  }
}


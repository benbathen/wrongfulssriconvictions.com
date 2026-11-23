import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap, mergeMap } from 'rxjs/operators';


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
  public stats = new Map<string, number>();
  public cell = false;
  width: number = 880;
  height: number = (this.width / 3) * 2;

  constructor(private httpClient: HttpClient) {
    this.searchTerms = ['Legal Problem', 'Acute Psychosis', 'GunShot Wound', 'Homicidal Ideation', 'Inapropriate Sexual Behavior', 'Confusional State', 'Suicidal Ideation', 'Intentional Self Injury', 'Homicide', 'Completed Suicide', 'Memory Impairment', 'Screaming', 'Disorientation', 'Imprisonment', 'Tardive Dyskenisia', 'Akathisia'];
    this.searchTerms.sort();
    // Load per-term counts for accuracy (even if slightly slower) — this mirrors
    // the previous per-term queries, ensuring exact match counts for each search term.
    this.loadAllLexaproReportsCounts(3).subscribe({
      next: () => {/* each item handled in pipeline */},
      error: (err) => console.error('Error loading per-term FAERS counts:', err),
      complete: () => console.info('Per-term FAERS counts load complete')
    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      this.cell = true;
    }

    this.width = screen.width;
    this.height = (this.width / 4) * 3;
  }

  /**
   * Existing method kept as a fallback; returns full results for the search term.
   * Use sparingly (limit set to 1 if only meta.total is needed).
   */
  getLexaproStatistics(searchTerm: string): Observable<FaersResponseObject> {
    let params = new HttpParams()
      .set('search', `(escitalopram) AND (${searchTerm})`)
      .set('limit', '1'); // smaller payload if you only need meta.results.total

    const key = environment.openFdaApiKey;
    if (key) {
      params = params.set('api_key', key);
    }

    return this.httpClient.get<FaersResponseObject>('https://api.fda.gov/drug/event.json', { params });
  }

  /**
   * Use the openFDA `count` parameter to retrieve aggregated counts for reaction terms
   * for the provided drug (e.g. 'escitalopram'). This reduces the number of API calls
   * and returns a lightweight payload containing the list of terms and counts.
   */
  getLexaproReactionCounts(drug: string = 'escitalopram'): Observable<{ term: string, count: number }[]> {
    let params = new HttpParams()
      .set('search', `(${drug})`)
      .set('count', 'patient.reaction.reactionmeddrapt.exact')
      .set('limit', '1000'); // max items returned by count aggregation

    const key = environment.openFdaApiKey;
    if (key) {
      params = params.set('api_key', key);
    }

    return this.httpClient.get<any>('https://api.fda.gov/drug/event.json', { params })
      .pipe(
        map(response => response.results || []),
        catchError(err => {
          console.error('Error fetching FAERS reaction counts', err);
          return of([]);
        })
      );
  }

  /**
   * Simple in-memory cache for counts with a TTL to avoid hitting the API repeatedly in short bursts.
   */
  private countsCache = new Map<string, { expiresAt: number, results: { term: string, count: number }[] }>();
  private CACHE_TTL_MS = 1000 * 60 * 10; // 10 minutes

  private getLexaproReactionCountsCached(drug: string = 'escitalopram') {
    const key = `counts:${drug}`;
    const existing = this.countsCache.get(key);
    if (existing && existing.expiresAt > Date.now()) {
      return of(existing.results);
    }

    return this.getLexaproReactionCounts(drug).pipe(
      tap(results => this.countsCache.set(key, { expiresAt: Date.now() + this.CACHE_TTL_MS, results }))
    );
  }

  /**
   * Return the number of matching FAERS reports for a search term. This uses the same
   * search pattern as the original code: `(escitalopram) AND (${searchTerm})`. The
   * `limit` is set to 1 for minimum payload; the response meta.results.total contains
   * the full number of matching reports.
   */
  getLexaproReportsCount(searchTerm: string): Observable<number> {
    let params = new HttpParams()
      .set('search', `(escitalopram) AND (${searchTerm})`)
      .set('limit', '1');

    const key = environment.openFdaApiKey;
    if (key) {
      params = params.set('api_key', key);
    }

    return this.httpClient.get<FaersResponseObject>('https://api.fda.gov/drug/event.json', { params }).pipe(
      map(response => response?.meta?.results?.total ?? 0),
      catchError(err => {
        console.error(`Error fetching count for ${searchTerm}`, err);
        return of(0);
      })
    );
  }

  private perTermCache = new Map<string, { expiresAt: number, count: number }>();
  private CACHE_TTL_PER_TERM_MS = 1000 * 60 * 10; // 10 minutes

  getLexaproReportsCountCached(searchTerm: string) {
    const key = `term:${searchTerm}`.toLowerCase();
    const cached = this.perTermCache.get(key);
    if (cached && cached.expiresAt > Date.now()) {
      return of(cached.count);
    }
    return this.getLexaproReportsCount(searchTerm).pipe(
      tap(count => this.perTermCache.set(key, { expiresAt: Date.now() + this.CACHE_TTL_PER_TERM_MS, count }))
    );
  }

  /**
   * Load per-term counts using one request per term (accurate) but limited concurrency.
   * This maps counts into `this.stats`. Accuracy is prioritized: we perform exact searches
   * for each configured term rather than using global reaction counts where text variations
   * cause mismatches.
   */
  loadAllLexaproReportsCounts(concurrency = 3) {
    return from(this.searchTerms).pipe(
      mergeMap((searchTerm) =>
        this.getLexaproReportsCountCached(searchTerm).pipe(
          tap(count => this.stats.set(searchTerm, count)),
          catchError(err => {
            console.error(`Error in per-term count pipeline for ${searchTerm}`, err);
            this.stats.set(searchTerm, 0);
            return of(0);
          })
        ), concurrency
      )
    );
  }

  /**
   * Loads counts for `searchTerms` using one aggregated openFDA `count` query for the drug
   * and maps results into `this.stats`. This is far more efficient than making a request per term.
   */
  loadLexaproReactionCounts(drug: string = 'escitalopram') {
    return this.getLexaproReactionCountsCached(drug).pipe(
      tap((results) => {
        // normalize result terms for lookups (lowercase, trimmed)
        const normalizedMap = new Map<string, number>();
        results.forEach(r => {
          if (r.term) {
            normalizedMap.set(r.term.trim().toLowerCase(), r.count);
          }
        });

        // update the stats map using configured searchTerms; fall back to zero when absent
        this.searchTerms.forEach(searchterm => {
          const normalized = searchterm.trim().toLowerCase();
          const count = normalizedMap.get(normalized) ?? 0;
          this.stats.set(searchterm, count);
        });
      }),
      catchError((err) => {
        console.error('Failed to load lexapro reaction counts', err);
        // fill stats with zeros as a fallback
        this.searchTerms.forEach(term => this.stats.set(term, 0));
        return of(null);
      })
    );
  }

  getGoogleAnalyticsData() {
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


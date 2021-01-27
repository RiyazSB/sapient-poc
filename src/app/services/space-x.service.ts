import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  noOfRecords = 20;
  private baseURL = `https://api.spaceXdata.com/v3/launches?limit=${this.noOfRecords}`;

  constructor(private http: HttpClient) { }

  getlaunches(filters: Filters): Observable<any> {
    let url = this.baseURL;

    Object.keys(filters).forEach(filter => {
      url = url + `&${filter}=${filters[filter as keyof Filters]}`;
    });
    return this.http.get(url);
  }

  downloadPdf() {
    const url = '/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    // const url = 'https://e2e.buy-uat.aflac.com/enrollment-policy/v1/policies/abfdb60eab60fa8dcf4876992b0b1f49/document/b7ab472e-51ea-48e0-8322-fdfe13e2adaa';
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      responseType: 'blob' as 'json'
    };
    return this.http.get(url, httpOptions);
  }
}

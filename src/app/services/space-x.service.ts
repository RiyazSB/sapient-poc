import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const url = '/assets/dummy.pdf';
    let headers = new HttpHeaders();
    // headers = headers.set('Accept', 'application/pdf');
    // headers = headers.set('Content-Type', 'application/json');
    // headers = headers.set('Access-Control-Allow-Origin', '*');
    // const url = 'https://e2e.buy-uat.aflac.com/enrollment-policy/v1/policies/abfdb60eab60fa8dcf4876992b0b1f49/document/b7ab472e-51ea-48e0-8322-fdfe13e2adaa';
    const httpOptions = {
      headers: headers,
      responseType: 'blob' as 'json'
    };
    return this.http.get(url, httpOptions);
  }
}

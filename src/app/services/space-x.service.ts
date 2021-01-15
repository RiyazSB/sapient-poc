import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filters } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private baseURL = 'https://api.spaceXdata.com/v3/launches?limit=10';

  constructor(private http: HttpClient) { }

  getlaunches(filters: Filters): Observable<any> {
    let url = this.baseURL;

    Object.keys(filters).forEach(filter => {
      url = url + `&${filter}=${filters[filter as keyof Filters]}`;
    });
    return this.http.get(url);
  }
}

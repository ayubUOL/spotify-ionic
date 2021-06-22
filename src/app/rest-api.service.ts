import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  constructor(private http: HttpClient) { }
  private apiUrl = 'http://restcountries.eu/rest/v2/all';

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  
  getCountries(): Observable<any> {
    return this.http.get(this.apiUrl)
      .map(res => this.extractData(<any> res))
      .catch(err => this.handleError(err));
  }
  
  
}

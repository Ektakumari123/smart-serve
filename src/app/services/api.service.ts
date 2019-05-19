import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { cors } from 'cors';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceUrl: any = {};

  constructor(
    private global: GlobalService,
    public http: HttpClient
  ) {
    this.serviceUrl = {
      products: this.global.url + 'smart-serve'
    };
    console.log('Hello Api Provider');
  }

  // postServiceCall(serviceURL, params: any): Observable<any> {
  //   return this.http.post(this.serviceUrl[serviceURL], params).pipe(
  //     tap((response: any) => {
  //     }),
  //     catchError(this.handleError<any>('postCallService'))
  //   );
  // }

  getServiceCall(serviceURL, params): Observable<any> {
    return this.http.get("http://www.json-generator.com/api/json/get/cekZNjuZKa?indent=2")
      .pipe(
        tap((response: any) => {
        }),
        catchError(this.handleError('getCallService', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

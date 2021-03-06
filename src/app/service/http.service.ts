import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { errorHandler } from '../utils/util';

const headers = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url)
      .pipe(catchError(errorHandler));
  }

  public post<T>(url: string, data: unknown): Observable<T> {
    return this.http
      .post<T>(url, data, headers)
      .pipe(catchError(errorHandler));
  }

  public put<T>(url: string, data: unknown): Observable<T> {
    return this.http
      .put<T>(url, data, headers)
      .pipe(catchError(errorHandler));
  }

  public delete<T>(url: string): Observable<T> {
    return this.http
      .delete<T>(url)
      .pipe(catchError(errorHandler));
  }
}

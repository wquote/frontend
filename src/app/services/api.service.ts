import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = isDevMode() ? 'http://localhost:8000' : 'https://wquote-api.onrender.com'


  constructor(private httpClient: HttpClient) { }


  get(endpoint: string): Observable<any> {
    return this.httpClient.get(this.url + endpoint)
    // .pipe(retryWhen((errors) => this.handleRetry(errors)));
  }

  post(endpoint: string, body: Object): Observable<any> {
    return this.httpClient.post(this.url + endpoint, body)
  }

  put(endpoint: string, body: Object): Observable<any>{
    return this.httpClient.put(this.url + endpoint, body)
  }

  delete(endpoint: string): Observable<any> {
    return this.httpClient.delete(this.url + endpoint)
    // .pipe(retryWhen((errors) => this.handleRetry(errors)));
  }
}

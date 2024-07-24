import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CreateResponse {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string | undefined


  constructor(private httpClient: HttpClient) {
    const currentUrl = window.location.href

    if (currentUrl.startsWith('http://localhost')) {
      this.url = 'http://localhost:8001'
      return
    }

    if (currentUrl.startsWith('https://h-wquote.onrender.com')) {
      this.url = 'https://h-wquote-api.onrender.com'
      return
    }

    if (currentUrl.startsWith('https://wquote.onrender.com')) {
      this.url = 'https://wquote-api.onrender.com'
      return
    }
  }

  post(endpoint: string, body: Object): Observable<CreateResponse> {
    const id = this.httpClient.post(this.url + endpoint, body)
    return id as Observable<CreateResponse>
  }

  get(endpoint: string, queryParams?: HttpParams): Observable<any> {
    return this.httpClient.get(this.url + endpoint, { params: queryParams })
    // .pipe(retryWhen((errors) => this.handleRetry(errors)));
  }

  put(endpoint: string, body: Object): Observable<any> {
    return this.httpClient.put(this.url + endpoint, body)
  }

  delete(endpoint: string): Observable<any> {
    return this.httpClient.delete(this.url + endpoint)
    // .pipe(retryWhen((errors) => this.handleRetry(errors)));
  }
}

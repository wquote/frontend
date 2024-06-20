import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/api.service';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  endpoint: string = '/quotes/'

  constructor(private apiService: ApiService) { }

  // create(item: Quote): Observable<Quote> {
  //   let url: string = this.endpoint
  //   const body: Object = item

  //   return this.apiService.post(url, body)
  // }

  read(itemId: string): Observable<Quote> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  readAll(customerId?: string): Observable<Quote[]> {
    let url: string = this.endpoint
    let queryParams: HttpParams | undefined

    if (customerId) {
      queryParams = new HttpParams({ fromObject: { 'customerId': customerId } })
    }

    return this.apiService.get(url, queryParams)
  }

  readByCustomer(customerId: string): Observable<Quote[]> {
    let url: string = this.endpoint
    let queryParams: HttpParams = new HttpParams({ fromObject: { 'customerId': customerId } })

    return this.apiService.get(url, queryParams)
  }

  // update(itemId: string, customer: Quote): Observable<Quote> {
  //   let url: string = this.endpoint + itemId
  //   const body: Object = customer

  //   return this.apiService.put(url, body)
  // }

  delete(itemId: string): Observable<Quote> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

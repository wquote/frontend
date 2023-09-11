import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { QuoteModel } from '../models/quote.models';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  endpoint: string = '/quotes/'

  constructor(private apiService: ApiService) { }

  create(item: QuoteModel): Observable<QuoteModel> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }
  
    read(itemId: string): Observable<QuoteModel> {
      let url: string = this.endpoint + itemId
  
      return this.apiService.get(url)
    }

  readAll(customerId?: string): Observable<QuoteModel[]> {
    let url: string = this.endpoint
    let queryParams: HttpParams | undefined

    if (customerId){
      queryParams = new HttpParams({fromObject: {'customerId': customerId}})
    }
    
    return this.apiService.get(url, queryParams)
  }

  update(itemId: string, customer: QuoteModel): Observable<QuoteModel> {
    let url: string = this.endpoint + itemId
    const body: Object = customer

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<QuoteModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

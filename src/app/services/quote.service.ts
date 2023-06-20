import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { QuoteModel } from '../models/quote.models';
import { Observable } from 'rxjs';

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

  readAll(): Observable<QuoteModel[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<QuoteModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
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

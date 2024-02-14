import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DeckingQuote as DeckingQuote } from '../models/decking-quote.model';

@Injectable({
  providedIn: 'root'
})
export class DeckQuoteService {
  
  endpoint: string = '/quotes/decking/'

  constructor(private apiService: ApiService) { }

  create(item: DeckingQuote): Observable<DeckingQuote> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }

  readAll(): Observable<DeckingQuote[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<DeckingQuote> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  update(itemId: string, customer: DeckingQuote): Observable<DeckingQuote> {
    let url: string = this.endpoint + itemId
    const body: Object = customer

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<DeckingQuote> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

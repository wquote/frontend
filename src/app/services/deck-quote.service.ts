import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DeckQuoteModel } from '../models/deck-quote.model';

@Injectable({
  providedIn: 'root'
})
export class DeckQuoteService {
  
  endpoint: string = '/quotes/decking/'

  constructor(private apiService: ApiService) { }

  create(item: DeckQuoteModel): Observable<DeckQuoteModel> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }

  readAll(): Observable<DeckQuoteModel[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<DeckQuoteModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  update(itemId: string, customer: DeckQuoteModel): Observable<DeckQuoteModel> {
    let url: string = this.endpoint + itemId
    const body: Object = customer

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<DeckQuoteModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

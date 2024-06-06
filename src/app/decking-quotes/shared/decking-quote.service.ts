import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DeckTakeOff, DeckingQuote } from './decking-quote.model';

@Injectable({
  providedIn: 'root'
})
export class DeckingQuoteService {
  
  endpoint: string = '/quotes/decking/'

  constructor(private apiService: ApiService) { }

  create(item: DeckingQuote): Observable<any> {
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

  update(itemId: string, item: DeckingQuote): Observable<DeckingQuote> {
    let url: string = this.endpoint + itemId
    const body: Object = item

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<DeckingQuote> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }

  estimateMaterialOrder(itemId: string, deckingQuote: DeckingQuote): Observable<any> {
    let url: string = this.endpoint + itemId + '/estimate'
    const body: Object = deckingQuote

    return this.apiService.put(url, body)
  }
}

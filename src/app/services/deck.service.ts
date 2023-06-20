import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DeckModel } from '../models/deck-quote.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  endpoint: string = '/decks/'

  constructor(private apiService: ApiService) { }

  create(item: DeckModel): Observable<DeckModel> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }

  readAll(): Observable<DeckModel[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<DeckModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  update(itemId: string, item: DeckModel): Observable<DeckModel> {
    let url: string = this.endpoint + itemId
    const body: Object = item

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<DeckModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

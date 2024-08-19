import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, CreateResponse } from 'src/app/core/api.service';
import { MaterialOrder } from './dmo-footing.model';


@Injectable({
  providedIn: 'root'
})
export class DmoFootingsService {

  endpoint: string = '/decking/material-order/footings'

  constructor(private apiService: ApiService) { }

  create(item: MaterialOrder): Observable<CreateResponse> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }

  readAll(): Observable<MaterialOrder[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<MaterialOrder> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  update(itemId: string, item: MaterialOrder): Observable<any> {
    let url: string = this.endpoint + itemId
    const body: Object = item

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<any> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

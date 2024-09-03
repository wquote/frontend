// todo
// - implement a base API service that uses type CreateType, like was coded in backend

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, CreateResponse } from 'src/app/core/api.service';
import { MaterialModel } from './material.model';

type CreateType = MaterialModel

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  endpoint: string = '/materials/'

  constructor(private apiService: ApiService) { }

  create(item: CreateType): Observable<CreateResponse> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }

  readAll(): Observable<MaterialModel[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<MaterialModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  update(itemId: string, customer: MaterialModel): Observable<any> {
    let url: string = this.endpoint + itemId
    const body: Object = customer

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<any> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

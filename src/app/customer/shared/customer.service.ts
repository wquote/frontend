import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/customer/shared/customer.model';
import { ApiService, CreateResponse } from 'src/app/core/api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  endpoint: string = '/customers/'

  constructor(private apiService: ApiService) { }

  create(item: CustomerModel): Observable<CreateResponse> {
    let url: string = this.endpoint
    const body: Object = item

    return this.apiService.post(url, body)
  }

  readAll(): Observable<CustomerModel[]> {
    let url: string = this.endpoint

    return this.apiService.get(url)
  }

  read(itemId: string): Observable<CustomerModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.get(url)
  }

  update(itemId: string, customer: CustomerModel): Observable<CustomerModel> {
    let url: string = this.endpoint + itemId
    const body: Object = customer

    return this.apiService.put(url, body)
  }

  delete(itemId: string): Observable<CustomerModel> {
    let url: string = this.endpoint + itemId

    return this.apiService.delete(url)
  }
}

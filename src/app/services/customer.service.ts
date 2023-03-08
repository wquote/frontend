import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: ApiService) { }

  create(customer: CustomerModel): Observable<CustomerModel> {
    const endpoint: string = '/customers'
    const body: Object = customer

    return this.apiService.post(endpoint, body)
  }

  readAll(): Observable<CustomerModel[]> {
    const endpoint: string = '/customers'

    return this.apiService.get(endpoint)
  }

  read(customerId: string): Observable<CustomerModel> {
    const endpoint: string = `/customers/${customerId}`

    return this.apiService.get(endpoint)
  }

  update(customer: CustomerModel): Observable<CustomerModel> {
    const endpoint: string = `/customers/${customer._id}`
    const body: Object = customer

    return this.apiService.put(endpoint, body)
  }

  delete(customerId: string): Observable<CustomerModel> {
    const endpoint: string = `/customers/${customerId}`

    return this.apiService.delete(endpoint)
  }
}

// ToDo:
// - [ ] tratar retorno da api com interceptor

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerId: string | undefined
  customer: CustomerModel = {} as CustomerModel
  customerToDelete: CustomerModel | undefined
  // deleteCustomerModal: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id') as string

    if (this.customerId && this.customerId != 'new') {
      this.customerService.read(this.customerId).subscribe(c => this.customer = c)
    }
  }

  submit() {
    this.save().subscribe(
      response => {
        this.router.navigate(['/customers/'])
    })
  }

  save(): Observable<CustomerModel> {
    return this.customerId && this.customerId != 'new' ?
      this.customerService.update(this.customerId, this.customer) :
      this.customerService.create(this.customer!)
  }

  updateCustomerToDelete(customer: CustomerModel) {
    this.customerToDelete = customer
  }

  deleteCustomer() {
    this.customerToDelete?.id && this.customerService.delete(this.customerToDelete.id).subscribe(
      result => {
        this.router.navigate(['/customers/'])
      }
    )
  }
}

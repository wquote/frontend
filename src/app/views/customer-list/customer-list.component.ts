import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerModel[] = []
  customerToDelete: CustomerModel = new CustomerModel()
  deleteCustomerModal: any

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.readAll().subscribe(
      result => {
        this.customers = result
      })
  }

  updateCustomerToDelete(customer: CustomerModel) {
    this.customerToDelete = customer
  }

  deleteCustomer() {
    this.customerService.delete(String(this.customerToDelete._id)).subscribe(
      result => {
        console.log(result)

        this.ngOnInit()
      }
    )
  }
}

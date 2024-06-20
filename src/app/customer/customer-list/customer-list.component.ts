import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/customer/shared/customer.model';
import { CustomerService } from '../shared/customer.service';



@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: CustomerModel[] = []
  customerToDelete: CustomerModel | undefined
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
    this.customerToDelete?.id && this.customerService.delete(this.customerToDelete.id).subscribe(
      result => {
        console.log(result)

        this.ngOnInit()
      }
    )
  }
  
  formatPhones(phones: string[]): string {
    if (!phones) {
      return '';
    }
    
    return phones.map(phone => {
      const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
      return null;
    }).join(', ');
  }
}

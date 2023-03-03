import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {

  customerName: string = ''

  customer: Customer = new Customer()

  onClick() {
    console.log(this.customer)
  }
}

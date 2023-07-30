import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';

@Component({
  selector: 'app-dqe-customer',
  templateUrl: './dqe-customer.component.html',
  styleUrls: ['./dqe-customer.component.css']
})
export class DqeCustomerComponent implements OnInit {

  @Input()
  customer: CustomerModel | undefined 

  ngOnInit() {

  }
}

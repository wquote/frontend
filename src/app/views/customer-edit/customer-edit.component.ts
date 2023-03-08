import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  creatingCustomer: boolean = false
  customer: CustomerModel = new CustomerModel()

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit() {

    if (this.router.url.includes('new')) {
      this.creatingCustomer = true
    }

    else {
      this.creatingCustomer = false

      let customerId: string = String(this.activatedRoute.snapshot.paramMap.get('id'))
      this.customerService.read(customerId).subscribe(
        result => {
          this.customer = result
        }
      )
    }
  }

  updateCustomer() {
    this.customerService.update(this.customer).subscribe(
      result => {
        console.log(result)
        this.router.navigate([ '/customers/list' ])
      }
    )
  }

  createCustomer() {
    this.customerService.create(this.customer).subscribe(
      result => {
        console.log(result)
        this.router.navigate([ '/customers/list' ])
      }
    )
  }
}

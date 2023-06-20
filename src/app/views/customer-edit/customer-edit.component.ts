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

  customerId: string | null = null
  customer: CustomerModel | null = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id')
    
    this.customerId && this.customerService.read(this.customerId).subscribe(c => this.customer = c)
  }

  submit() {
    this.save().subscribe( 
      response => {
        console.log(response)
        this.router.navigate(['/customers/list']) 
    })
  }

  save(): Observable<CustomerModel> {
    return this.customerId ? this.customerService.update(this.customerId, this.customer!) : this.customerService.create(this.customer!)
  }
}

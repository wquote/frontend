import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { QuoteModel } from 'src/app/models/quote.models';
import { CustomerService } from 'src/app/services/customer.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-customer-quotes-list',
  templateUrl: './customer-quotes-list.component.html',
  styleUrls: ['./customer-quotes-list.component.css']
})
export class CustomerQuotesListComponent implements OnInit {
  customerId: string | undefined
  customer: CustomerModel | undefined
  customerQuotes: QuoteModel[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private quoteService: QuoteService
  ) { }

  ngOnInit(){
    this.readCustomer()
    this.readCustomerQuotes()
  }

  readCustomer() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id') as string

    if (this.customerId) {
      this.customerService.read(this.customerId).subscribe(c => this.customer = c)
    }
  }

  readCustomerQuotes() {
    this.quoteService.readAll(this.customerId).subscribe( q => {
      // Sort by date
      // q.sort( (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime() )
      this.customerQuotes = q
    })
  }
}

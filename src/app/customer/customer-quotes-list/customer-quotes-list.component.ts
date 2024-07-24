import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateResponse } from 'src/app/core/api.service';
import { CustomerModel } from 'src/app/customer/shared/customer.model';
import { DeckingQuote } from 'src/app/decking-quotes/shared/decking-quote.model';
import { DeckingQuoteService } from 'src/app/decking-quotes/shared/decking-quote.service';
import { Quote } from "src/app/quotes/quote.model";
import { QuoteService } from 'src/app/quotes/quote.service';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-quotes-list',
  templateUrl: './customer-quotes-list.component.html',
  styleUrls: ['./customer-quotes-list.component.css']
})
export class CustomerQuotesListComponent implements OnInit {

  customerId: string | undefined
  customer: CustomerModel = new CustomerModel()
  customerQuotes: Quote[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private quoteService: QuoteService,
    private deckingQuoteService: DeckingQuoteService,
    private router: Router
  ) { }

  ngOnInit() {
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
    this.customerId && this.quoteService.readByCustomer(this.customerId).subscribe(q => {
      q.sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())
      this.customerQuotes = q
    })
  }

  createQuote(type: string) {
    if (type === 'decking') {
      const item: DeckingQuote = new DeckingQuote()
      item.customerId = this.customerId
      item.jobAddress = this.customer.homeAddress || ''

      this.deckingQuoteService.create(item)
        .subscribe((response: CreateResponse) => {
          if (!response.id) { window.alert('Failed to create quote'); return }

          this.router.navigate([`/quotes/decking/${response.id}`], { queryParams: { customerId: this.customerId } })
        })
    }
  }
}

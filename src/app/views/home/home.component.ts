// ToDo
// - !trazer o nome do cliente e job address no quoteService readAll
// - implementar a paginação 

import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { Quote } from 'src/app/models/quote.models';
import { CustomerService } from 'src/app/services/customer.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  quotes: Quote[] | undefined
  quoteToDelete: Quote | undefined

  customers: CustomerModel[] = []

  constructor(
    private quoteService: QuoteService,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.readAllCustomers()
    this.readAllQuotes()
  }

  readAllCustomers() {
    this.customerService.readAll().subscribe( c => {
      this.customers = c
    })
  }

  readAllQuotes() {
    this.quoteService.readAll().subscribe( q => {
      // Sort by date - desc
      // q.sort( (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime() )
      this.quotes = q
    })
  }

  getCustomerName(id: string | undefined): string | undefined {
    if(!id){
      return
    }

    let customer = this.customers.filter( c => c.id == id)[0]

    if(!customer){
      return undefined
    }

    let name: string | undefined = customer.firstName + ' ' + customer.lastName
    return name ? name : ''
  }

  updateQuoteToDelete(item: Quote) {
    this.quoteToDelete = item
  }

  deleteQuote() {
    this.quoteToDelete?.id && this.quoteService.delete(this.quoteToDelete.id).subscribe(
      () => this.ngOnInit()
    )
  }
}

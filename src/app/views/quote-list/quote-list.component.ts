// ToDo
// - !trazer o nome do cliente no quoteService readAll
// - implementar a paginação 

import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { QuoteModel } from 'src/app/models/quote.models';
import { CustomerService } from 'src/app/services/customer.service';
import { QuoteService } from 'src/app/services/quote.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
  quotes: QuoteModel[] | undefined
  quoteToDelete: QuoteModel | undefined
  deleteDeckQuoteModal: any

  customers: CustomerModel[] = []

  constructor(
    private quoteService: QuoteService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.customerService.readAll().subscribe(c => {
      this.customers = c
    })

    this.quoteService.readAll().subscribe(q => {
      // Sort by date
      // q.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      this.quotes = q
    })
  }

  getCustomerName(id: string | undefined): string | undefined {
    if (!id) {
      return
    }
    let name: string | undefined = this.customers.filter(c => c._id == id)[0]?.lastName
    return name ? name : ''
  }

  updateQuoteToDelete(item: QuoteModel) {
    this.quoteToDelete = item
  }

  deleteQuote() {
    this.quoteToDelete?.id && this.quoteService.delete(this.quoteToDelete.id).subscribe(
      () => this.ngOnInit()
    )
  }
}

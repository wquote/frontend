// ToDo
// - !trazer o nome do cliente e job address no quoteService readAll
// - implementar a paginação 

import { Component } from '@angular/core'
import { CustomerModel } from 'src/app/customer/shared/customer.model'
import { Quote } from "src/app/quotes/quote.model"
import { CustomerService } from 'src/app/customer/shared/customer.service'
import { QuoteService } from 'src/app/quotes/quote.service'
import { BehaviorSubject, Observable } from 'rxjs'

class QuoteWithCustomerName extends Quote {
  customerName?: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  quotes: Quote[] = []
  quotesWithCustomerName: QuoteWithCustomerName[] = []
  searchTerm: string = ''
  filteredQuotes: QuoteWithCustomerName[] = []
  quoteToDelete?: Quote
  customers: CustomerModel[] = []
  customers$ = new BehaviorSubject<CustomerModel[]>([])

  constructor(
    private quoteService: QuoteService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.readAllCustomers()
    this.readAllQuotes()
  }

  readAllCustomers() {
    this.customerService.readAll()
      .subscribe(customers => {
        this.customers = customers
        this.customers$.next(customers)
      })
  }

  readAllQuotes() {
    this.quoteService.readAll()
      .subscribe((quotes: Quote[]) => {
        quotes.sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime())
        this.quotes = quotes

        this.customers$.subscribe(_ => {
          this.quotesWithCustomerName = quotes.map((quote: Quote) => {
            return ({
              ...quote,
              customerName: this.getCustomerName(quote.customerId)
            })
          })
          this.filteredQuotes = this.quotesWithCustomerName
        })
      })
  }


  filterQuotes(): void {
    if (!this.searchTerm) {
      this.filteredQuotes = this.quotesWithCustomerName
      return
    }

    this.filteredQuotes = this.quotesWithCustomerName.filter(quote => {
      const customerName: string | undefined = this.getCustomerName(quote.customerId)
      // const jobAddress: string | undefined = quote.jobAddress?.toLowerCase()
      const searchTermLower = this.searchTerm.toLowerCase()

      return customerName?.toLowerCase().includes(searchTermLower)
      // || jobAddress?.includes(searchTermLower)
    })
  }

  getCustomerName(id?: string): string {
    if (!id) { return 'Unkown' }

    let customer: CustomerModel = this.customers.filter(c => c.id == id)[0]
    if (!customer) { return 'Unknown' }

    let name: string = customer.lastName + ', ' + customer.firstName
    return name
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

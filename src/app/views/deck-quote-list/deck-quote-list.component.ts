import { Component } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';
import { CustomerService } from 'src/app/services/customer.service';
import { DeckQuoteService } from 'src/app/services/deck-quote.service';

@Component({
  selector: 'app-deck-quote-list',
  templateUrl: './deck-quote-list.component.html',
  styleUrls: ['./deck-quote-list.component.css']
})
export class DeckQuoteListComponent {
  deckQuotes: DeckQuoteModel[] = []
  deckQuoteToDelete: DeckQuoteModel | null = null
  deleteDeckQuoteModal: any

  customers: CustomerModel[] = []

  constructor(
    private deckQuoteService: DeckQuoteService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.deckQuoteService.readAll().subscribe(dq => this.deckQuotes = dq)
    this.customerService.readAll().subscribe(c => this.customers = c)
  }

  updateCustomerToDelete(customer: DeckQuoteModel) {
    this.deckQuoteToDelete = customer
  }

  deleteDeck() {
    this.deckQuoteToDelete?.id && this.deckQuoteService.delete(this.deckQuoteToDelete.id).subscribe(
      () => this.ngOnInit()
    )
  }
}

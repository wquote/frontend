// ToDo
// paginacao
// aggregate no mongodb pra trazer o nome do customer 

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';
import { CustomerService } from 'src/app/services/customer.service';
import { DeckQuoteService } from 'src/app/services/deck-quote.service';

@Component({
  selector: 'app-deck-quote-edit',
  templateUrl: './deck-quote-edit.component.html',
  styleUrls: ['./deck-quote-edit.component.css']
})
export class DeckQuoteEditComponent {
  customerId: string | undefined
  customer: CustomerModel | undefined
  quoteId: string | undefined
  deckQuote: DeckQuoteModel = {} as DeckQuoteModel

  // mainAreaList: any[] = [1]
  // stairList: any[] = [1]
  // landList: any[] = [1]
  // extraMaterialList: any[] = [1]

  // menu: string = 'footing'

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private deckQuoteService: DeckQuoteService,
  ) { }

  ngOnInit(): void {
    this.readCustomer()
    this.readDeckQuote()
  }

  readCustomer() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id') as string

    if (this.customerId && this.customerId != 'new') {
      this.customerService.read(this.customerId).subscribe( c => this.customer = c )
    }
  }

  readDeckQuote() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('quoteId') as string

    if (this.quoteId && this.quoteId != 'new') {
      this.deckQuoteService.read(this.quoteId).subscribe( dq => this.deckQuote = dq )
    }
  }
}

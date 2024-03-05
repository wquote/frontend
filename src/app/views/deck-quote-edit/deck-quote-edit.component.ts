// ToDo
// paginacao
// aggregate no mongodb pra trazer o nome do customer 

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckingQuote } from 'src/app/models/decking-quote.model';
import { JobType } from 'src/app/models/type.model';
import { CustomerService } from 'src/app/services/customer.service';
import { DeckQuoteService } from 'src/app/services/deck-quote.service';

@Component({
  selector: 'app-deck-quote-edit',
  templateUrl: './deck-quote-edit.component.html',
  styleUrls: ['./deck-quote-edit.component.css']
})
export class DeckQuoteEditComponent {
  customerId: string | undefined
  customer: CustomerModel = {} as CustomerModel
  quoteId: string | undefined
  deckingQuote: DeckingQuote | undefined
  activeTab: string = 'customer-info'

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private deckQuoteService: DeckQuoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.readCustomer()
    this.readDeckQuote()
  }

  readCustomer() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('id') as string

    if (this.customerId && this.customerId != 'new') {
      this.customerService.read(this.customerId).subscribe(c => this.customer = c)
    }
  }

  readDeckQuote() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('quoteId') as string

    if (this.quoteId && this.quoteId != 'new') {
      this.deckQuoteService.read(this.quoteId).subscribe(dq => this.deckingQuote = dq)
    } else {
      this.deckingQuote = {
        jobAddress: undefined,
        type: JobType.DECKING,
        deck: {
          mainAreas: [
            { width: 0, depth: 0, height: 0 }
          ],
          ladingAreas: [
            { width: 0, depth: 0, height: 0 }
          ],
          stairs: [
            { width: 0, riser: 0 }
          ]
        }
      } as any
    }
  }

  runEstimate() {
    console.log('runEstimate')
  }

  save() {
    if (this.deckingQuote) {
      this.deckingQuote.customerId = this.customerId

      // new deck quote
      if (!this.deckingQuote.id) {
        this.deckQuoteService.create(this.deckingQuote).subscribe(
          r => window.alert('Deck quote created successfully')
        )
      }
      // edit deck quote
      else {
        this.deckQuoteService.update(this.deckingQuote.id, this.deckingQuote).subscribe(
          r => window.alert('Deck quote updated successfully')
        )
      }
    }
  }
}

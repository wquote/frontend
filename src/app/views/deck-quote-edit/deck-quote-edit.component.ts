// ToDo
// paginacao
// aggregate no mongodb pra trazer o nome do customer 

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';
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
  customer: CustomerModel | undefined
  quoteId: string | undefined
  deckQuote: DeckQuoteModel | undefined

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
      this.deckQuoteService.read(this.quoteId).subscribe(dq => this.deckQuote = dq)
    } else {
      this.deckQuote = {
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

  save() {
    if(this.deckQuote){
      this.deckQuote.idCustomer = this.customerId
      this.deckQuoteService.create(this.deckQuote).subscribe(r => this.router.navigate(['customers', this.customerId, 'quotes']))
    }
  }
}

// ToDo
// paginacao
// aggregate no mongodb pra trazer o nome do customer 

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CustomerModel } from 'src/app/customer/shared/customer.model';
import { CustomerService } from 'src/app/customer/shared/customer.service';
import { DeckingQuote } from 'src/app/decking-quotes/shared/decking-quote.model';
import { DeckingQuoteService } from 'src/app/decking-quotes/shared/decking-quote.service';


@Component({
  selector: 'app-decking-quote-edit',
  templateUrl: './decking-quote-edit.component.html',
  styleUrls: ['./decking-quote-edit.component.css']
})
export class DeckingQuoteEditComponent {
  customerId?: string
  customer: CustomerModel = new CustomerModel()
  quoteId?: string
  deckingQuote: DeckingQuote = new DeckingQuote()
  homeAddress$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private deckingQuoteService: DeckingQuoteService,
  ) { }

  ngOnInit(): void {
    this.readCustomer()
    this.readDeckingQuote()
  }

  readCustomer(): void {
    this.customerId = this.activatedRoute.snapshot.queryParamMap.get('customerId') as string

    if (this.customerId) {
      this.customerService.read(this.customerId)
        .subscribe((c: CustomerModel) => {
          this.customer = c
          this.homeAddress$.next(c.homeAddress || '')
        })
    }
  }

  readDeckingQuote(): void {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('quoteId') as string

    // Wait for readCustomer() to set jobAddress as homeAddress - async function problems
    if (!this.quoteId) {
      this.homeAddress$.subscribe((homeAddress: string) => {
        this.deckingQuote.jobAddress = homeAddress
      })
      return
    }

    if (this.quoteId) {
      this.deckingQuoteService.read(this.quoteId)
        .subscribe((dq: DeckingQuote) => {
          this.deckingQuote = dq
        })
    }
  }

  estimateMaterialOrder(): void {
    if (!this.quoteId) { return }

    this.deckingQuoteService.estimateMaterialOrder(this.quoteId, this.deckingQuote)
      .subscribe({
        next: _ => this.readDeckingQuote(),
        error: _ => window.alert('Failed to estimate material order.')
      })
  }

  updateProjectValue(projectValue: number): void {
    this.deckingQuote && (this.deckingQuote.value = projectValue)
  }

  updateProfit(profit: number): void {
    this.deckingQuote && (this.deckingQuote.profit = profit)
  }

  save(): void {
    this.deckingQuote.customerId = this.customerId

    // new deck quote
    // if (!this.deckingQuote.id) {
    //   this.deckingQuoteService.create(this.deckingQuote)
    //     .subscribe((resp: CreateResponse) => {
    //       if (!resp.id) {
    //         window.alert('Failed to create decking quote.')
    //         return
    //       }

    //       this.readDeckingQuote()
    //       this.router.navigate(['quotes', 'decking', resp.id], { queryParams: { customerId: this.customerId } });
    //     }
    //     )
    // }

    // edit deck quote
    if (this.deckingQuote.id) {
      this.deckingQuoteService.update(this.deckingQuote.id, this.deckingQuote)
        .subscribe({
          next: _ => this.readDeckingQuote(),
          error: _ => window.alert('Failed to update decking quote.')
        })
    }
  }

}

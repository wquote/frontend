// ToDo
// paginacao
// aggregate no mongodb pra trazer o nome do customer 

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DeckTakeOff, DeckingMaterialOrder, DeckingQuote, DescCost } from 'src/app/decking-quotes/shared/decking-quote.model';
import { DeckingQuoteService } from 'src/app/decking-quotes/shared/decking-quote.service';
import { CustomerModel } from 'src/app/models/customer.model';
import { JobType } from 'src/app/models/type.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-decking-quote-edit',
  templateUrl: './decking-quote-edit.component.html',
  styleUrls: ['./decking-quote-edit.component.css']
})
export class DeckingQuoteEditComponent {
  customerId: string = ''
  customer: CustomerModel = new CustomerModel()
  quoteId: string = ''
  deckingQuote: DeckingQuote = new DeckingQuote()
  homeAddress$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private deckingQuoteService: DeckingQuoteService,
  ) { }

  ngOnInit(): void {
    this.readCustomer()
    this.readDeckingQuote()
  }

  readCustomer() {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId') as string
    if (this.customerId) {
      this.customerService.read(this.customerId).subscribe((c: CustomerModel) => {
        this.customer = c
        c.homeAddress && this.homeAddress$.next(c.homeAddress)
      })
    }
  }

  readDeckingQuote() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('quoteId') as string

    if (!this.quoteId) {
      this.deckingQuote = new DeckingQuote()
      this.homeAddress$.subscribe((homeAddress: string) => {
        this.deckingQuote && (this.deckingQuote.jobAddress = homeAddress)
      })
      return
    }

    if (this.quoteId) {
      this.deckingQuoteService.read(this.quoteId).subscribe(
        (dq: DeckingQuote) => {
          this.deckingQuote = dq
        })
    }
  }

  estimateMaterialOrder() {
    if (!this.deckingQuote || !this.quoteId) { return }

    this.deckingQuoteService.estimateMaterialOrder(this.quoteId, this.deckingQuote).subscribe(
      (respOk) => {
        if (!respOk) {
          window.alert('Failed to estimate decking quote material order.')
          return
        }
        window.alert('Decking quote estimated successfully.')
        this.readDeckingQuote()
      }
    )
  }

  updateProjectValue(projectValue: number) {
    // console.log('updateProjectValue()', projectValue)
    this.deckingQuote && (this.deckingQuote.value = projectValue)
  }

  updateProfit(profit: number) {
    // console.log('updateProfit()', profit)
    this.deckingQuote && (this.deckingQuote.profit = profit)
  }

  save() {
    if (this.deckingQuote) {
      this.deckingQuote.customerId = this.customerId

      // new deck quote
      if (!this.deckingQuote.id) {
        this.deckingQuoteService.create(this.deckingQuote).subscribe(
          (resp) => {
            window.alert('Decking quote created successfully.')
            this.router.navigate(['/customers', this.customerId, 'quotes', resp.id])
          }
        )
      }
      // edit deck quote
      else {
        this.deckingQuoteService.update(this.deckingQuote.id, this.deckingQuote).subscribe(
          () => {
            window.alert('Decking quote updated successfully.')
            this.readDeckingQuote()
            window.location.reload()
            // this.router.navigate(['/customers', this.customerId, 'quotes', this.quoteId])
          }
        )
      }
    }
  }
}

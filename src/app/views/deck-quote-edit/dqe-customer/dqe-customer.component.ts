import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-customer',
  templateUrl: './dqe-customer.component.html',
  styleUrls: ['./dqe-customer.component.css']
})
export class DqeCustomerComponent implements OnInit {

  @Input()
  deckQuote: DeckQuoteModel | undefined

  @Input()
  customer: CustomerModel | undefined 

  newAddress: string | undefined

  ngOnInit() {
    if(this.deckQuote && !this.deckQuote.jobAddress && this.customer && this.customer.homeAddress){
      this.deckQuote.jobAddress = this.customer.homeAddress
    }
  }

  changeJobAddress(address: string | undefined){
    if(!this.deckQuote){
      return
    }
    this.deckQuote.jobAddress = address
  }

}

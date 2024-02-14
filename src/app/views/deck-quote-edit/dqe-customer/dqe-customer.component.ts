import { Component, Input, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckingQuote } from 'src/app/models/decking-quote.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dqe-customer',
  templateUrl: './dqe-customer.component.html',
  styleUrls: ['./dqe-customer.component.css']
})
export class DqeCustomerComponent implements OnInit {

  @Input()
  deckQuote: DeckingQuote = { notes: ''} as DeckingQuote

  @Input()
  customer: CustomerModel | undefined

  newAddress: string | undefined

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    if (this.deckQuote && !this.deckQuote.jobAddress && this.customer && this.customer.homeAddress) {
      this.deckQuote.jobAddress = this.customer.homeAddress
    }
    this.deckQuote = this.deckQuote ?? { notes: ''} as DeckingQuote
  }

  changeJobAddress(address: string | undefined) {
    if (!this.deckQuote) {
      return
    }
    this.deckQuote.jobAddress = address
  }

  addNewAddress() {
    if (!this.newAddress) {
      return
    }
    if (!this.customer?.id) {
      return
    }
    if (this.customer && !this.customer?.jobAddress) {
      this.customer.jobAddress = []
    }

    if (this.customer.jobAddress.indexOf(this.newAddress) >= 0){
      return
    }

    this.customer?.jobAddress.push(this.newAddress)
    this.customerService.update(this.customer?.id, this.customer).subscribe(() => {
      if (!this.deckQuote) {
        return
      }
      this.deckQuote.jobAddress = this.newAddress
      this.newAddress = undefined
    })
  }

  removeJobAddress(address: string) {
    if (!this.customer) {
      return
    }
    if (!this.customer.id) {
      return
    }
    this.customer.jobAddress = this.customer.jobAddress.filter(a => a != address);
    if (this.deckQuote && this.deckQuote.jobAddress == address) {
      this.deckQuote.jobAddress = undefined
    }
    this.customerService.update(this.customer.id, this.customer).subscribe(() => { })
  }

}

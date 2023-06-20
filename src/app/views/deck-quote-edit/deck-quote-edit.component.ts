import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckModel, DeckQuoteModel } from 'src/app/models/deck-quote.model';
import { CustomerService } from 'src/app/services/customer.service';
import { DeckQuoteService } from 'src/app/services/deck-quote.service';

@Component({
  selector: 'app-deck-quote-edit',
  templateUrl: './deck-quote-edit.component.html',
  styleUrls: ['./deck-quote-edit.component.css']
})
export class DeckQuoteEditComponent {
  deckQuoteId: string | null = null
  deckQuote: DeckQuoteModel | null = null
  deck: DeckModel | null = null

  customers: CustomerModel[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private deckQuoteService: DeckQuoteService,
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.customerService.readAll().subscribe( c => {
      this.customers = c
    })

    this.deckQuoteId = this.activatedRoute.snapshot.paramMap.get('id')
    this.deckQuoteId && this.deckQuoteService.read(this.deckQuoteId).subscribe(d => {

      this.deckQuote = d
    })
  }

  getCustomerInfo(id: string){
    let customer: CustomerModel = this.customers.filter( c => c.id == id)[0]
    return customer
  }

  submit() {
    this.save().subscribe( () => this.router.navigate(['/quotes/decks/list']) )
  }

  save(): Observable<DeckQuoteModel> {
    return this.deckQuoteId ? this.deckQuoteService.update(this.deckQuoteId, this.deckQuote!) : this.deckQuoteService.create(this.deckQuote!)
  }

  onClick() {
    console.log("click")
  }
}

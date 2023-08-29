import { Component, Input } from '@angular/core';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-order',
  templateUrl: './dqe-order.component.html',
  styleUrls: ['./dqe-order.component.css']
})
export class DqeOrderComponent {

  @Input()
  deckQuote: DeckQuoteModel | undefined

}

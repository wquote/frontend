import { Component, Input } from '@angular/core';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-order',
  templateUrl: './dqe-order.component.html',
  styleUrls: ['./dqe-order.component.css']
})
export class DqeOrderComponent {

  menu: string = 'board'

  @Input()
  deckQuote: DeckQuoteModel | undefined

}

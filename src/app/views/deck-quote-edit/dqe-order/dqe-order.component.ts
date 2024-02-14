import { Component, Input } from '@angular/core';
import { DeckingQuote } from 'src/app/models/decking-quote.model';

@Component({
  selector: 'app-dqe-order',
  templateUrl: './dqe-order.component.html',
  styleUrls: ['./dqe-order.component.css']
})
export class DqeOrderComponent {

  menu: string = 'footings'

  @Input()
  deckingQuote: DeckingQuote | undefined

}

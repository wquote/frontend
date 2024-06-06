import { Component, Input } from '@angular/core';
import { DeckingMaterialOrder, DeckingQuote } from 'src/app/decking-quotes/shared/decking-quote.model';

@Component({
  selector: 'app-dqe-material-order',
  templateUrl: './dqe-material-order.component.html',
  styleUrls: ['./dqe-material-order.component.css']
})
export class DqeMaterialOrderComponent {

  menu: string = 'footings'

  // @Input() deckingQuote: DeckingQuote | undefined
  @Input() materialOrder: DeckingMaterialOrder = new DeckingMaterialOrder()
}

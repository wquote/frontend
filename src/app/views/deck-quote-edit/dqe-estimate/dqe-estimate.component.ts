import { Component, Input } from '@angular/core';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-estimate',
  templateUrl: './dqe-estimate.component.html',
  styleUrls: ['./dqe-estimate.component.css']
})
export class DqeEstimateComponent {

  @Input()
  deckQuote: DeckQuoteModel | undefined

}

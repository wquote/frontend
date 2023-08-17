import { Component, Input, OnInit } from '@angular/core';
import { Area, DeckModel, DeckQuoteModel, Stair } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-takeoff',
  templateUrl: './dqe-takeoff.component.html',
  styleUrls: ['./dqe-takeoff.component.css']
})
export class DqeTakeoffComponent implements OnInit {

  @Input()
  deckQuote: DeckQuoteModel | undefined

  ngOnInit(): void {
    if (!this.deckQuote) {
      return
    }
    if (!this.deckQuote.decking) {
      this.deckQuote.decking = {} as DeckModel
    }
    if (!this.deckQuote.decking.mainAreas) {
      this.deckQuote.decking.mainAreas = [{
        width: undefined,
        depth: undefined,
        height: undefined
      } as Area]
    }
    if (!this.deckQuote.decking.ladingAreas) {
      this.deckQuote.decking.ladingAreas = [{
        width: undefined,
        depth: undefined,
        height: undefined
      } as Area]
    }
    if (!this.deckQuote.decking.stairs) {
      this.deckQuote.decking.stairs = [{
        width: undefined,
        riser: undefined,
      } as Stair]
    }
  }

}
import { Component, Input, defineInjectable } from '@angular/core';
import { DeckQuoteModel } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-estimate',
  templateUrl: './dqe-estimate.component.html',
  styleUrls: ['./dqe-estimate.component.css']
})
export class DqeEstimateComponent {

  menu: string = 'material'

  @Input()
  deckQuote: DeckQuoteModel | undefined

  minorCost(deckingIndex: number, railingIndex: number): boolean {

    if (!this.deckQuote || !this.deckQuote.boardSpecs || !this.deckQuote.railingSpecs) {
      return false
    }

    let minorDeckingIndex = 0
    let minorRailingIndex = 0

    this.deckQuote.boardSpecs.catalogsSpec.forEach((b, bi) => {
      if(this.deckQuote && this.deckQuote.railingSpecs){
        this.deckQuote.railingSpecs.catalogsSpec.forEach((r, ri) => {
          if(this.deckQuote && this.deckQuote.boardSpecs && this.deckQuote.railingSpecs){
            if(b.cost + r.cost < this.deckQuote.boardSpecs.catalogsSpec[minorDeckingIndex].cost + this.deckQuote.railingSpecs.catalogsSpec[minorRailingIndex].cost){
              minorDeckingIndex = bi
              minorRailingIndex = ri
            }
          }
        })
      }
    })

    return deckingIndex == minorDeckingIndex && railingIndex == minorRailingIndex
  }

  majorCost(deckingIndex: number, railingIndex: number): boolean {

    if (!this.deckQuote || !this.deckQuote.boardSpecs || !this.deckQuote.railingSpecs) {
      return false
    }

    let majorDeckingIndex = 0
    let majorRailingIndex = 0

    this.deckQuote.boardSpecs.catalogsSpec.forEach((b, bi) => {
      if(this.deckQuote && this.deckQuote.railingSpecs){
        this.deckQuote.railingSpecs.catalogsSpec.forEach((r, ri) => {
          if(this.deckQuote && this.deckQuote.boardSpecs && this.deckQuote.railingSpecs){
            if(b.cost + r.cost > this.deckQuote.boardSpecs.catalogsSpec[majorDeckingIndex].cost + this.deckQuote.railingSpecs.catalogsSpec[majorRailingIndex].cost){
              majorDeckingIndex = bi
              majorRailingIndex = ri
            }
          }
        })
      }
    })

    return deckingIndex == majorDeckingIndex && railingIndex == majorRailingIndex
  }

}

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

  addArea() {
    if(!this.deckQuote || !this.deckQuote.decking) {
      return
    }
    this.deckQuote.decking.mainAreas?.push({} as Area)
  }

  addLandingArea() {
    if(!this.deckQuote || !this.deckQuote.decking) {
      return
    }
    this.deckQuote.decking.ladingAreas?.push({} as Area)
  }

  addStair() {
    if(!this.deckQuote || !this.deckQuote.decking) {
      return
    }
    this.deckQuote.decking.stairs?.push({} as Stair)
  }

  removeArea(mainArea: Area){
    if(!this.deckQuote || !this.deckQuote.decking || !this.deckQuote.decking.mainAreas){
      return
    }
    this.deckQuote.decking.mainAreas = this.deckQuote.decking.mainAreas.filter(a => a!= mainArea)
  }

  removeLandingArea(landingArea: Area){
    if(!this.deckQuote || !this.deckQuote.decking || !this.deckQuote.decking.ladingAreas){
      return
    }
    this.deckQuote.decking.ladingAreas = this.deckQuote.decking.ladingAreas.filter(a => a!= landingArea)
  }

  removeStair(stair: Stair){
    if(!this.deckQuote || !this.deckQuote.decking || !this.deckQuote.decking.stairs){
      return
    }
    this.deckQuote.decking.stairs = this.deckQuote.decking.stairs.filter(a => a!= stair)
  }

}
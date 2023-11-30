import { Component, Input, OnInit } from '@angular/core';
import { Area, DeckModel, DeckQuoteModel, Stair } from 'src/app/models/deck-quote.model';

@Component({
  selector: 'app-dqe-takeoff',
  templateUrl: './dqe-takeoff.component.html',
  styleUrls: ['./dqe-takeoff.component.css']
})
export class DqeTakeoffComponent implements OnInit {
  
  menu: string = 'footing'

  @Input()
  deckQuote: DeckQuoteModel | undefined

  ngOnInit(): void {
    if (!this.deckQuote) {
      return
    }
    if (!this.deckQuote.deckingInfo) {
      this.deckQuote.deckingInfo = {} as DeckModel
    }
    if (!this.deckQuote.deckingInfo.mainAreas) {
      this.deckQuote.deckingInfo.mainAreas = [{
        width: undefined,
        depth: undefined,
        height: undefined
      } as Area]
    }
    if (!this.deckQuote.deckingInfo.ladingAreas) {
      this.deckQuote.deckingInfo.ladingAreas = [{
        width: undefined,
        depth: undefined,
        height: undefined
      } as Area]
    }
    if (!this.deckQuote.deckingInfo.stairs) {
      this.deckQuote.deckingInfo.stairs = [{
        width: undefined,
        riser: undefined,
      } as Stair]
    }
  }

  addArea() {
    if(!this.deckQuote || !this.deckQuote.deckingInfo) {
      return
    }
    this.deckQuote.deckingInfo.mainAreas?.push({} as Area)
  }

  addLandingArea() {
    if(!this.deckQuote || !this.deckQuote.deckingInfo) {
      return
    }
    this.deckQuote.deckingInfo.ladingAreas?.push({} as Area)
  }

  addStair() {
    if(!this.deckQuote || !this.deckQuote.deckingInfo) {
      return
    }
    this.deckQuote.deckingInfo.stairs?.push({} as Stair)
  }

  removeArea(mainArea: Area){
    if(!this.deckQuote || !this.deckQuote.deckingInfo || !this.deckQuote.deckingInfo.mainAreas){
      return
    }
    this.deckQuote.deckingInfo.mainAreas = this.deckQuote.deckingInfo.mainAreas.filter(a => a!= mainArea)
  }

  removeLandingArea(landingArea: Area){
    if(!this.deckQuote || !this.deckQuote.deckingInfo || !this.deckQuote.deckingInfo.ladingAreas){
      return
    }
    this.deckQuote.deckingInfo.ladingAreas = this.deckQuote.deckingInfo.ladingAreas.filter(a => a!= landingArea)
  }

  removeStair(stair: Stair){
    if(!this.deckQuote || !this.deckQuote.deckingInfo || !this.deckQuote.deckingInfo.stairs){
      return
    }
    this.deckQuote.deckingInfo.stairs = this.deckQuote.deckingInfo.stairs.filter(a => a!= stair)
  }

}

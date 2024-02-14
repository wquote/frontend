import { Component, Input, OnInit } from '@angular/core';
import { Area, DeckTakeOff, DeckingQuote, DescQtyCost, Layout, Stair } from 'src/app/models/decking-quote.model';

@Component({
  selector: 'app-dqe-takeoff',
  templateUrl: './dqe-takeoff.component.html',
  styleUrls: ['./dqe-takeoff.component.css']
})
export class DqeTakeoffComponent implements OnInit {
  
  menu: string = 'footing'

  @Input()
  deckingQuote: DeckingQuote = {} as DeckingQuote

  ngOnInit(): void {
    if (!this.deckingQuote) {
      return
    }
    if (!this.deckingQuote.deckTakeOff) {
      this.deckingQuote.deckTakeOff = {} as DeckTakeOff
    }
    if (!this.deckingQuote.deckTakeOff.layout) {
      this.deckingQuote.deckTakeOff.layout = {} as Layout
    }
    if (!this.deckingQuote.deckTakeOff.layout.mainAreas) {
      this.deckingQuote.deckTakeOff.layout.mainAreas = [{
        width: undefined,
        depth: undefined,
        height: undefined
      } as Area]
    }
    if (!this.deckingQuote.deckTakeOff.layout?.ladingAreas) {
      this.deckingQuote.deckTakeOff.layout.ladingAreas = [{
        width: undefined,
        depth: undefined,
        height: undefined
      } as Area]
    }
    if (!this.deckingQuote.deckTakeOff.layout.stairs) {
      this.deckingQuote.deckTakeOff.layout.stairs = [{
        width: undefined,
        riser: undefined,
      } as Stair]
    }
    if (!this.deckingQuote.materialOrder.extraMaterials) {
      this.deckingQuote.materialOrder.extraMaterials = [{} as DescQtyCost]
    }
  }

  addArea() {
    if(!this.deckingQuote || !this.deckingQuote.deckTakeOff) {
      return
    }
    this.deckingQuote.deckTakeOff.layout.mainAreas?.push({} as Area)
  }

  addLandingArea() {
    if(!this.deckingQuote || !this.deckingQuote.deckTakeOff) {
      return
    }
    this.deckingQuote.deckTakeOff.layout.ladingAreas?.push({} as Area)
  }

  addStair() {
    if(!this.deckingQuote || !this.deckingQuote.deckTakeOff) {
      return
    }
    this.deckingQuote.deckTakeOff.layout.stairs?.push({} as Stair)
  }

  addExtraMaterial() {
    if(!this.deckingQuote || !this.deckingQuote.materialOrder.extraMaterials) {
      return
    }
    this.deckingQuote.materialOrder.extraMaterials?.push({} as DescQtyCost)
  }

  removeArea(mainArea: Area){
    if(!this.deckingQuote || !this.deckingQuote.deckTakeOff || !this.deckingQuote.deckTakeOff.layout.mainAreas){
      return
    }
    this.deckingQuote.deckTakeOff.layout.mainAreas = this.deckingQuote.deckTakeOff.layout.mainAreas.filter(a => a!= mainArea)
  }

  removeLandingArea(landingArea: Area){
    if(!this.deckingQuote || !this.deckingQuote.deckTakeOff || !this.deckingQuote.deckTakeOff.layout.ladingAreas){
      return
    }
    this.deckingQuote.deckTakeOff.layout.ladingAreas = this.deckingQuote.deckTakeOff.layout.ladingAreas.filter(a => a!= landingArea)
  }

  removeStair(stair: Stair){
    if(!this.deckingQuote || !this.deckingQuote.deckTakeOff || !this.deckingQuote.deckTakeOff.layout.stairs){
      return
    }
    this.deckingQuote.deckTakeOff.layout.stairs = this.deckingQuote.deckTakeOff.layout.stairs.filter(a => a!= stair)
  }

  removeExtraMaterial(extraMaterial: DescQtyCost){
    if(!this.deckingQuote || !this.deckingQuote.materialOrder.extraMaterials){
      return
    }
    this.deckingQuote.materialOrder.extraMaterials = this.deckingQuote.materialOrder.extraMaterials.filter(a => a!= extraMaterial)
  }

}

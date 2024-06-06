import { Component, Input } from '@angular/core';
import { Area, DeckTakeOff, DescQtyCost, Stair } from 'src/app/decking-quotes/shared/decking-quote.model';


@Component({
  selector: 'app-dqe-takeoff',
  templateUrl: './dqe-takeoff.component.html',
  styleUrls: ['./dqe-takeoff.component.css']
})
export class DqeTakeoffComponent {
  @Input() deckTakeOff: DeckTakeOff = new DeckTakeOff() // This input is overrided by the parent's input
  @Input() extraMaterials: DescQtyCost[] = []

  menu: string = 'layout'

  addArea() {
    this.deckTakeOff.layout.mainAreas.push(new Area())
  }

  removeArea(mainArea: Area) {
    this.deckTakeOff.layout.mainAreas = this.deckTakeOff.layout.mainAreas.filter(a => a != mainArea)
  }

  addLandingArea() {
    this.deckTakeOff.layout.ladingAreas.push(new Area())
  }

  removeLandingArea(landingArea: Area) {
    this.deckTakeOff.layout.ladingAreas = this.deckTakeOff.layout.ladingAreas.filter(a => a != landingArea)
  }

  addStair() {
    this.deckTakeOff.layout.stairs.push(new Stair())
  }

  removeStair(stair: Stair) {
    this.deckTakeOff.layout.stairs = this.deckTakeOff.layout.stairs.filter(a => a != stair)
  }

  addExtraMaterial() {
    this.extraMaterials.push(new DescQtyCost())
  }

  removeExtraMaterial(extraMaterial: DescQtyCost) {
    this.extraMaterials = this.extraMaterials.filter(a => a != extraMaterial)
  }
}

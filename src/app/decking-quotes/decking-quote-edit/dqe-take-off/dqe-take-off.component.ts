import { Component, Input } from '@angular/core';
import { Area, DeckTakeOff, DescQtyCost, Stair } from 'src/app/decking-quotes/shared/decking-quote.model';


@Component({
  selector: 'app-dqe-takeoff',
  templateUrl: './dqe-take-off.component.html',
  styleUrls: ['./dqe-take-off.component.css']
})
export class DqeTakeOffComponent {
  @Input() deckTakeOff: DeckTakeOff = new DeckTakeOff() // This input is overrided by the parent's input
  @Input() extraMaterials: DescQtyCost[] = []

  menu: string = 'footing'



  addExtraMaterial() {
    this.extraMaterials.push(new DescQtyCost())
  }

  removeExtraMaterial(extraMaterial: DescQtyCost) {
    this.extraMaterials = this.extraMaterials.filter(a => a != extraMaterial)
  }
}

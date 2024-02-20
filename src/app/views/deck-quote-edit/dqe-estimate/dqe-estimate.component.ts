import { Component, Input } from '@angular/core';
import { CustomerModel } from 'src/app/models/customer.model';
import { DeckingQuote, DescCost, DescQtyCost } from 'src/app/models/decking-quote.model';
import { MaterialOrderSpec, MaterialOrderSpecs } from 'src/app/models/material-order.model';

@Component({
  selector: 'app-dqe-estimate',
  templateUrl: './dqe-estimate.component.html',
  styleUrls: ['./dqe-estimate.component.css']
})
export class DqeEstimateComponent {

  @Input()
  deckingQuote: DeckingQuote = {} as DeckingQuote
  @Input()
  customer: CustomerModel = {} as CustomerModel

  menu: string = 'general'

  sumMaterialsCost(boardXY: MaterialOrderSpec | undefined = undefined, railingXY: MaterialOrderSpec | undefined = undefined): number {
    let totalCost: number = 0;

    const addMaterialOrderCost = (item: MaterialOrderSpecs) => {
      if (item) {
        const index = item.selectedSpecIndex;
        totalCost += item.materialOrderSpecs[index].cost;
      }
    }

    const addExtraMaterialsCost = (extraMaterials: DescCost[]) => {
      extraMaterials.forEach(em => totalCost += em.cost)
    }

    if (this.deckingQuote && this.deckingQuote.materialOrder) {
      const { footings, frame, galvanized, board, railing, finishing, rainScape, extraMaterials } = this.deckingQuote.materialOrder;

      addMaterialOrderCost(footings);
      addMaterialOrderCost(frame);
      addMaterialOrderCost(galvanized);
      boardXY == undefined ? addMaterialOrderCost(board) : totalCost += boardXY.cost;
      railingXY == undefined ? addMaterialOrderCost(railing) : totalCost += railingXY.cost;
      addMaterialOrderCost(finishing);
      addMaterialOrderCost(rainScape);
      addExtraMaterialsCost(extraMaterials);
    }

    return totalCost;
  }

  sumExtraMaterialsCost(): number {
    return this.deckingQuote.materialOrder.extraMaterials.reduce((acc, cur) => acc + (cur.qty || 0) * (cur.cost || 0), 0) || 0;
  }

  sumLaborCost(): number {
    return this.deckingQuote.laborCost.reduce((acc, cur) => acc + (cur.cost || 0), 0) || 0;
  }

  sumOtherCost(): number {
    return this.deckingQuote.otherCost.reduce((acc, cur) => acc + (cur.qty || 0) * (cur.cost || 0), 0) || 0;
  }

  sumTotalCost(): number {
    return this.sumMaterialsCost() + this.sumLaborCost() + this.sumOtherCost();
  }

  calculateProfit(): number {
    return this.sumTotalCost() * ((this.deckingQuote.profitPercent || 0) / 100);
  }

  calculateProjectValue(): number {
    return this.deckingQuote.value = this.sumTotalCost() + this.calculateProfit()
  }

  calculateXYViewCost(board: MaterialOrderSpec, railing: MaterialOrderSpec): number {
    return this.sumMaterialsCost(board, railing) + this.sumLaborCost() + this.sumOtherCost() + this.calculateProfit()
  }

  addLaborCost() {
    if (!this.deckingQuote || !this.deckingQuote.laborCost) {
      this.deckingQuote.laborCost = [] as DescCost[]
    }
    this.deckingQuote.laborCost.push({} as DescCost)
  }

  addOtherCost() {
    if (!this.deckingQuote || !this.deckingQuote.otherCost) {
      this.deckingQuote.otherCost = [] as DescQtyCost[]
    }
    this.deckingQuote.otherCost.push({} as DescQtyCost)
  }

  removeLaborCost(labor: DescCost) {
    if (!this.deckingQuote || !this.deckingQuote.laborCost) {
      return
    }
    this.deckingQuote.laborCost = this.deckingQuote.laborCost.filter(l => l != labor)
  }

  removeOtherCost(other: DescQtyCost) {
    if (!this.deckingQuote || !this.deckingQuote.otherCost) {
      return
    }
    this.deckingQuote.otherCost = this.deckingQuote.otherCost.filter(o => o != other)
  }

  minorCost(deckingIndex: number, railingIndex: number): boolean {
    if (!this.deckingQuote || !this.deckingQuote.materialOrder.board || !this.deckingQuote.materialOrder.railing) {
      return false
    }

    let minorDeckingIndex = 0
    let minorRailingIndex = 0

    this.deckingQuote.materialOrder.board.materialOrderSpecs.forEach((b, bi) => {
      if (this.deckingQuote && this.deckingQuote.materialOrder.railing) {
        this.deckingQuote.materialOrder.railing.materialOrderSpecs.forEach((r, ri) => {
          if (this.deckingQuote && this.deckingQuote.materialOrder.board && this.deckingQuote.materialOrder.railing) {
            if (b.cost + r.cost < this.deckingQuote.materialOrder.board.materialOrderSpecs[minorDeckingIndex].cost
              + this.deckingQuote.materialOrder.railing.materialOrderSpecs[minorRailingIndex].cost) {
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
    if (!this.deckingQuote || !this.deckingQuote.materialOrder.board || !this.deckingQuote.materialOrder.railing) {
      return false
    }

    let majorDeckingIndex = 0
    let majorRailingIndex = 0

    this.deckingQuote.materialOrder.board.materialOrderSpecs.forEach((b, bi) => {
      if (this.deckingQuote && this.deckingQuote.materialOrder.railing) {
        this.deckingQuote.materialOrder.railing.materialOrderSpecs.forEach((r, ri) => {
          if (this.deckingQuote && this.deckingQuote.materialOrder.board && this.deckingQuote.materialOrder.railing) {
            if (b.cost + r.cost > this.deckingQuote.materialOrder.board.materialOrderSpecs[majorDeckingIndex].cost
              + this.deckingQuote.materialOrder.railing.materialOrderSpecs[majorRailingIndex].cost) {
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

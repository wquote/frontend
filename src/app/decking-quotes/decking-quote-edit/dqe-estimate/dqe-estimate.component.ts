import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomerModel } from 'src/app/customer/shared/customer.model';
import { DeckingQuote, DescCost, DescQtyCost } from 'src/app/decking-quotes/shared/decking-quote.model';
import { MaterialOrderSpec, MaterialOrderSpecs } from 'src/app/shared/material-order.model';

@Component({
  selector: 'app-dqe-estimate',
  templateUrl: './dqe-estimate.component.html',
  styleUrls: ['./dqe-estimate.component.css']
})
export class DqeEstimateComponent implements OnDestroy, OnChanges {

  @Input() customer: CustomerModel = new CustomerModel()
  @Input() deckingQuote: DeckingQuote = new DeckingQuote()

  menu: string = 'general'
  mo_footings: MaterialOrderSpecs = new MaterialOrderSpecs()
  mo_frame: MaterialOrderSpecs = new MaterialOrderSpecs()

  materialTotalCost: number = 0
  laborTotalCost: number = 0
  otherTotalCost: number = 0
  totalCost: number = 0

  formGroupEstimate: FormGroup = this.fb.group({
    formLaborCosts: this.fb.array([]),
    formNotes: this.fb.control(''),
    formOtherCosts: this.fb.array([]),
    formProfitPercent: this.fb.control(0),
  })

  get formLaborCosts(): FormArray { return this.formGroupEstimate.get('formLaborCosts') as FormArray }
  get formNotes(): FormControl { return this.formGroupEstimate.get('formNotes') as FormControl }
  get formOtherCosts(): FormArray { return this.formGroupEstimate.get('formOtherCosts') as FormArray }
  get formProfitPercent(): FormControl { return this.formGroupEstimate.get('formProfitPercent') as FormControl }

  private subsctiptions: Subscription = new Subscription()

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    (window as any).deckingQuote = this.deckingQuote

    console.log('ngOnChanges()', changes)

    this.mo_footings = this.deckingQuote!.materialOrder.footings
    this.mo_frame = this.deckingQuote!.materialOrder.frame

    this.onFormLaborCostsChange()
    this.onFormNotesChange()
    this.onFormOtherCostsChange()
    this.onFormProfitPercentChange()
    this.onFormGroupChange()
    this.initializeFormGroupEstimate()

    this.calculateMaterialCosts()

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()')
    this.subsctiptions.unsubscribe()
  }

  initializeFormGroupEstimate() {
    console.log('initializeFormGroupEstimate()', this.deckingQuote)

    // Initialize formLaborCosts
    this.deckingQuote.laborCosts.forEach(labor => {
      this.formLaborCosts.push(this.fb.group(labor))
    })

    // Initialize formNotes
    this.formNotes.setValue(this.deckingQuote.notes)

    // Initialize formOtherCosts
    this.deckingQuote.otherCosts.forEach(other => {
      this.formOtherCosts.push(this.fb.group(other))
    })

    // Initialize formProfitPercent
    this.formProfitPercent.setValue(this.deckingQuote.profitPercent)

  }

  onFormLaborCostsChange() {
    console.log('onFormLaborCostsChange()')
    this.subsctiptions.add(
      this.formLaborCosts.valueChanges.subscribe((values: DescCost[]) => {
        this.deckingQuote && (this.deckingQuote.laborCosts = values)
        this.laborTotalCost = values.reduce((acc, cur) => acc + (cur.cost || 0), 0)
      })
    )
  }

  onFormNotesChange() {
    console.log('onFormNotesChange()')
    this.subsctiptions.add(
      this.formNotes.valueChanges.subscribe((value: string) => {
        this.deckingQuote && (this.deckingQuote.notes = value)
      })
    )
  }

  onFormOtherCostsChange() {
    console.log('onFormOtherCostsChange()')
    this.subsctiptions.add(
      this.formOtherCosts.valueChanges.subscribe((values: DescQtyCost[]) => {
        this.deckingQuote && (this.deckingQuote.otherCosts = values)
        this.otherTotalCost = values.reduce((acc, cur) => acc + (cur.qty || 0) * (cur.cost || 0), 0)
      })
    )
  }

  onFormProfitPercentChange() {
    console.log('onFormProfitPercentChange()')
    this.subsctiptions.add(
      this.formProfitPercent.valueChanges.subscribe((value: number) => {
        this.deckingQuote && (this.deckingQuote.profitPercent = value)
      })
    )
  }

  onFormGroupChange() {
    console.log('onFormGroupChange()')
    this.subsctiptions.add(
      this.formGroupEstimate.valueChanges.subscribe((values) => {
        const material: number = this.calculateMaterialCosts()
        const labor: number = (values.formLaborCosts as DescCost[]).reduce((acc, cur) => acc + (cur.cost || 0), 0)
        const other: number = (values.formOtherCosts as DescQtyCost[]).reduce((acc, cur) => acc + (cur.qty || 0) * (cur.cost || 0), 0)
        this.totalCost = material + labor + other

        setTimeout(() => {
          this.deckingQuote && (this.deckingQuote.profit = this.totalCost * values.formProfitPercent / 100)
          this.deckingQuote && (this.deckingQuote.value = this.totalCost + (this.deckingQuote.profit || 0))
        })
      })
    )
  }

  addLaborCost() {
    const laborCost = this.fb.group({
      desc: ['', Validators.required],
      cost: [null, Validators.required]
    })
    this.formLaborCosts.push(laborCost)
  }

  removeLaborCost(index: number) {
    this.formLaborCosts.removeAt(index)
  }

  addOtherCost() {
    const otherCost = this.fb.group({
      desc: ['', Validators.required],
      qty: [null, Validators.required],
      cost: [null, Validators.required]
    })
    this.formOtherCosts.push(otherCost)
  }

  removeOtherCost(index: number) {
    this.formOtherCosts.removeAt(index)
  }


  calculateMaterialCosts(boardXY?: MaterialOrderSpec, railingXY?: MaterialOrderSpec): number {
    let totalMaterialCosts: number = 0

    const addMaterialOrderCost = (item: MaterialOrderSpecs) => {
      if (!item || item.selectedSpecIndex === undefined) { return }

      let index: number = item.selectedSpecIndex
      totalMaterialCosts += item.materialOrderSpecs[index].cost || 0
    }

    const addExtraMaterialsCost = (extraMaterials: DescQtyCost[]) => {
      if (!extraMaterials) return

      extraMaterials.forEach(em => totalMaterialCosts += em.cost!)
    }

    if (this.deckingQuote && this.deckingQuote.materialOrder) {
      const { footings, frame, galvanized, board, railing, finishing, rainScape, extraMaterials } = this.deckingQuote.materialOrder;

      console.log('calculateMaterialCosts()', footings, frame, galvanized, board, railing, finishing, rainScape, extraMaterials)
      addMaterialOrderCost(footings);
      addMaterialOrderCost(frame);
      addMaterialOrderCost(galvanized);
      boardXY == undefined ? addMaterialOrderCost(board) : totalMaterialCosts += boardXY.cost!;
      railingXY == undefined ? addMaterialOrderCost(railing) : totalMaterialCosts += railingXY.cost!;
      addMaterialOrderCost(finishing);
      addMaterialOrderCost(rainScape);
      addExtraMaterialsCost(extraMaterials);
    }

    this.materialTotalCost = totalMaterialCosts
    console.log('calculateMaterialCosts()', totalMaterialCosts)
    return totalMaterialCosts
  }

  calculateExtraMaterialsCost(): number {
    return this.deckingQuote.materialOrder.extraMaterials.reduce((acc, cur) => acc + (cur.qty || 0) * (cur.cost || 0), 0) || 0
  }

  calculateXYViewCost(board: MaterialOrderSpec, railing: MaterialOrderSpec): number {
    return this.calculateMaterialCosts(board, railing) + this.laborTotalCost + this.otherTotalCost + (this.deckingQuote.profit || 0)
    // return 0
  }

  minorCost(deckingIndex: number, railingIndex: number): boolean {
    if (!this.deckingQuote || !this.deckingQuote.materialOrder || !this.deckingQuote.materialOrder.board || !this.deckingQuote.materialOrder.railing) {
      return false
    }

    let minorDeckingIndex = 0
    let minorRailingIndex = 0

    this.deckingQuote.materialOrder.board.materialOrderSpecs.forEach((b, bi) => {
      if (this.deckingQuote && this.deckingQuote.materialOrder && this.deckingQuote.materialOrder.railing) {
        this.deckingQuote.materialOrder.railing.materialOrderSpecs.forEach((r, ri) => {
          if (this.deckingQuote && this.deckingQuote.materialOrder && this.deckingQuote.materialOrder.board && this.deckingQuote.materialOrder.railing) {
            if (b.cost! + r.cost! < this.deckingQuote.materialOrder.board.materialOrderSpecs[minorDeckingIndex].cost!
              + this.deckingQuote.materialOrder.railing.materialOrderSpecs[minorRailingIndex].cost!) {
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
    if (!this.deckingQuote || !this.deckingQuote.materialOrder || !this.deckingQuote.materialOrder.board || !this.deckingQuote.materialOrder.railing) {
      return false
    }

    let majorDeckingIndex = 0
    let majorRailingIndex = 0

    this.deckingQuote.materialOrder.board.materialOrderSpecs.forEach((b, bi) => {
      if (this.deckingQuote && this.deckingQuote.materialOrder && this.deckingQuote.materialOrder.railing) {
        this.deckingQuote.materialOrder.railing.materialOrderSpecs.forEach((r, ri) => {
          if (this.deckingQuote && this.deckingQuote.materialOrder && this.deckingQuote.materialOrder.board && this.deckingQuote.materialOrder.railing) {
            if (b.cost! + r.cost! > this.deckingQuote.materialOrder.board.materialOrderSpecs[majorDeckingIndex].cost!
              + this.deckingQuote.materialOrder.railing.materialOrderSpecs[majorRailingIndex].cost!) {
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

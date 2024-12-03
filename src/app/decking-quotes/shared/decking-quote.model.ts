import { MaterialOrderSpecs } from "src/app/shared/material-order.model"
import { JobType } from "src/app/shared/type.model"
import { Quote } from "src/app/quotes/quote.model"


export class DeckingQuote extends Quote {
  override type: JobType = JobType.DECKING
  deckTakeOff: DeckTakeOff = new DeckTakeOff()
  materialOrder: DeckingMaterialOrder = new DeckingMaterialOrder()
  laborCosts: DescCost[] = new Array<DescCost>()
  otherCosts: DescQtyCost[] = new Array<DescQtyCost>()
}

export class DeckTakeOff {
  footings: Footings = new Footings()
  layout: Layout = new Layout()
  railing: any[] | undefined
  finishing: any[] | undefined
  rainScapeany: any[] | undefined
}

export class DeckingMaterialOrder {
  footings: MaterialOrderSpecs = new MaterialOrderSpecs()
  frame: MaterialOrderSpecs = new MaterialOrderSpecs()
  galvanized: MaterialOrderSpecs = new MaterialOrderSpecs()
  board: MaterialOrderSpecs = new MaterialOrderSpecs()
  railing: MaterialOrderSpecs = new MaterialOrderSpecs()
  finishing: MaterialOrderSpecs = new MaterialOrderSpecs()
  rainScape: MaterialOrderSpecs = new MaterialOrderSpecs()
  extraMaterials: DescQtyCost[] = []
}

export class Footings {
  bigFoot: QtySize = new QtySize()
  helicalPost: QtySize = new QtySize()
  sonotube: QtySize = new QtySize()
}

export class Layout {
  mainAreas: Area[] = [new Area()]
  ladingAreas: Area[] = [new Area()]
  stairs: Stair[] = [new Stair()]
  dtt1z?: number
  dtt2z?: number
}

export class Area {
  deckGrade?: string
  ledgerBoard: QtySize = new QtySize()
  ledgerAttachesTo?: string
  supportPostGrade: QtySize = new QtySize()
  width?: number
  depth?: number
  height?: number
  pictureFrame?: number
  beamGrade: QtySize = new QtySize()
}

export class Stair {
  width?: number
  riser?: number
  supportPostGrade: QtySize = new QtySize()
  beamGrade: QtySize = new QtySize()
  railingsOn?: string
}

export class DescCost {
  desc?: string
  cost?: number
}

export class DescQtyCost extends DescCost {
  qty?: number
}

export class QtySize {
  qty?: number
  size?: string
}

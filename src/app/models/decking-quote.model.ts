import { MaterialOrderSpecs } from "./material-order.model";
import { Quote } from "./quote.models"

// export interface Area {
//   width: number | undefined
//   depth: number | undefined
//   height: number | undefined
// }

// export interface Stair {
//   width: number | undefined
//   riser: number | undefined
// }

// export interface DeckModel {
//   mainAreas: Area[] | undefined
//   ladingAreas: Area[] | undefined
//   stairs: Stair[] | undefined
// }

// export interface DeckingQuote extends QuoteModel {
//   deckingInfo: DeckModel | undefined
//   boardSpecs: CatalogSpecsModel | undefined
//   railingSpecs: CatalogSpecsModel | undefined
//   pressureTreatedSpecs: CatalogSpecsModel | undefined
//   structuralSpecs: CatalogSpecsModel | undefined
//   finishingSpecs: CatalogSpecsModel | undefined
//   rainScapeSpecs: CatalogSpecsModel | undefined
//   extraMaterials: ExtraMaterialsModel[] | undefined
//   jobDescription: string | undefined
// }

// export interface CatalogSpecsModel {
//   selectedSpecIndex: number | undefined
//   catalogsSpec: CatalogItemSpecModel[]
// }

// export interface CatalogItemSpecModel {
//   name: string | undefined
//   materials: CatalogItemMaterialSpecModel[] | undefined
//   tax: number
//   cost: number
// }

// export interface CatalogItemMaterialSpecModel {
//   descSnapshot: string | undefined
//   priceSnapshot: number | undefined
//   qty: number | undefined
// }

// export interface ExtraMaterialsModel {
//   desc: string | undefined
//   price: number | undefined
//   qty: number | undefined
// }


export interface DescCost {
  desc: string;
  cost: number;
}

export interface DescQtyCost extends DescCost {
  qty: number;
}

export interface Area {
  width: number | undefined;
  depth: number | undefined;
  height: number | undefined;
}

export interface Stair {
  width: number | undefined;
  riser: number | undefined;
}

export interface Layout {
  mainAreas: Area[];
  ladingAreas: Area[];
  stairs: Stair[];
}

export interface DeckTakeOff {
  footings: any[] | undefined;
  layout: Layout;
  railing: any[] | undefined;
  finishing: any[] | undefined;
  rainScape: any[] | undefined;
}

export interface DeckingMaterialOrder {
  footings: MaterialOrderSpecs;
  frame: MaterialOrderSpecs;
  galvanized: MaterialOrderSpecs;
  board: MaterialOrderSpecs;
  railing: MaterialOrderSpecs;
  finishing: MaterialOrderSpecs;
  rainScape: MaterialOrderSpecs;
  extraMaterials: DescQtyCost[];
}

export interface DeckingQuote extends Quote {
  deckTakeOff: DeckTakeOff;
  materialOrder: DeckingMaterialOrder;
  laborCost: DescCost[];
  otherCost: DescQtyCost[];
}

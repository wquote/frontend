import { QuoteModel } from "./quote.models"

export interface Area {
  width: number | undefined
  depth: number | undefined
  height: number | undefined
}

export interface Stair {
  width: number | undefined
  riser: number | undefined
}

export interface DeckModel {
  mainAreas: Area[] | undefined
  ladingAreas: Area[] | undefined
  stairs: Stair[] | undefined
}

export interface DeckQuoteModel extends QuoteModel {
  deckingInfo: DeckModel | undefined
  boardSpecs: CatalogSpecsModel | undefined
  railingSpecs: CatalogSpecsModel | undefined
  pressureTreatedSpecs: CatalogSpecsModel | undefined
  structuralSpecs: CatalogSpecsModel | undefined
  finishingSpecs: CatalogSpecsModel | undefined
  rainScapeSpecs: CatalogSpecsModel | undefined
}

export interface CatalogSpecsModel {
  selectedSpecIndex: number | undefined
  catalogsSpec: CatalogItemSpecModel[]
}

export interface CatalogItemSpecModel {
  name: string | undefined
  materials: CatalogItemMaterialSpecModel[] | undefined
  tax: number
  cost: number
}

export interface CatalogItemMaterialSpecModel {
  descSnapshot: string | undefined
  priceSnapshot: number | undefined
  qty: number | undefined
}
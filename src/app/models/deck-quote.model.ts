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
  deckingBoardSpecs: DeckingBoardSpecsModel | undefined
}

export interface DeckingBoardSpecsModel {
  selectedSpecIndex: number | undefined
  catalogsSpec: CatalogSpecModel[]
}

export interface CatalogSpecModel {
  name: string | undefined
  materials: MaterialModel[] | undefined
  tax: number
  cost: number
}

export interface MaterialModel {
  descSnapshot: string | undefined
  priceSnapshot: number | undefined
  qty: number | undefined
}
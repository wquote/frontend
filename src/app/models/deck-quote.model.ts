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
  decking: DeckModel | undefined
}
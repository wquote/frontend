import { QuoteModel } from "./quote.models"

interface Area {
  width: number | undefined
  depth: number | undefined
  height: number | undefined
}

interface Stair {
  width: number | undefined
  riser: number | undefined
}

export interface DeckModel {
  main_areas: Area[] | undefined
  lading_areas: Area[] | undefined
  stairs: Stair[] | undefined
}

export interface DeckQuoteModel extends QuoteModel {
  deck: DeckModel | undefined
}
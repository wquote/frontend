import { QuoteModel } from "./quote.models"

interface Area{
  width: number
  depth: number
}

interface Stair{
  width: number
  riser: number
}

export interface DeckModel{
  main_areas: Area[]
  lading_areas: Area[]
  stairs: Stair[]
}

interface DeckBoardSpecMaterialModel{
  id: string
  desc: string
  qty: number
  price_snapshot: number
}

interface DeckBoardSpecification{
  id_deckboard_template: string
  name: string
  materials: DeckBoardSpecMaterialModel[]
  tax: number
  cost: number
}

export interface DeckQuoteModel extends QuoteModel{
  deck: DeckModel
  board_specs: DeckBoardSpecification[]
}

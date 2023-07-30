export interface QuoteModel {
    id: string,
    id_customer: string,
    type: string,
    date: Date,
    profit: number,
    total_cost: number,
    job_address: QuoteJobAddress
}

interface QuoteJobAddress {
  id: string,
  address: string,
  alias: string
}

export interface QuoteModel {
    id: string,
    id_customer: string,
    type: string,
    date: Date,
    profit: number,
    total_cost: number,
    jobAddress: string | undefined
}
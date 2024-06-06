import { JobType, QuoteState } from "./type.model"

export class Quote {
  id: string | undefined
  customerId: string | undefined
  jobAddress?: string
  type: JobType | undefined
  notes: string | undefined
  createdAt: Date | undefined
  updatedAt: Date | undefined
  closedAt: Date | undefined
  state: QuoteState | undefined
  profitPercent: number | undefined
  profit: number | undefined
  value: number | undefined
}

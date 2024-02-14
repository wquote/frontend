import { JobType, QuoteState } from "./type.model"

export interface Quote {
  id: string | undefined
  customerId: string | undefined
  jobAddress?: string
  type: JobType | undefined
  notes: string
  createdAt: Date | undefined
  updatedAt: Date | undefined
  closedAt: Date | undefined
  state: QuoteState | undefined
  profit: number | undefined
  profitPercent: number
  value: number | undefined
}

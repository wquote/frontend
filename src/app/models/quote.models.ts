import { JobType } from "./type.model"

export interface QuoteModel {
  id: string | undefined
  customerId: string | undefined
  jobAddress: string | undefined
  type: JobType | undefined
  date: Date | undefined
  profit: number | undefined
  value: number | undefined
}
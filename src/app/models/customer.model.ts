export interface CustomerModel {
  id: string,
  name: string,
  address: string,
  email: string,
  phone: string,
  job_address: CustomerJobAddress[]
}

interface CustomerJobAddress {
  id: string,
  address: string,
  alias: string
}

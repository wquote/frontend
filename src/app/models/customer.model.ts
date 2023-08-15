export interface CustomerModel {
  id: string,

  firstName: string,
  lastName: string,
  homeAddress: string,

  phones: string[],
  emails: string[],

  notes: string,
  jobAddress: string[]
}

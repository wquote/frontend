export interface CustomerModel {
  id: string,

  /**
  * @deprecated Name will be removed. Use first_name and last_name instead.
  */
  name: string,
  /**
  * @deprecated Name will be removed. Use emails instead.
  */
  email: string,
  /**
  * @deprecated Name will be removed. Use phones instead.
  */
  phone: string,

  first_name: string,
  last_name: string,
  address: string,
  land_line: string,

  phones: string[],
  emails: string[],

  notes: string
}
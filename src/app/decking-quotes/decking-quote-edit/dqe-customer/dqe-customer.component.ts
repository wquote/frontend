import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerModel } from 'src/app/customer/shared/customer.model';
import { CustomerService } from 'src/app/customer/shared/customer.service';

@Component({
  selector: 'app-dqe-customer',
  templateUrl: './dqe-customer.component.html',
  styleUrls: ['./dqe-customer.component.css']
})
export class DqeCustomerComponent implements OnInit {

  @Input() customer?: CustomerModel

  @Input() notes?: string
  @Output() notesChange = new EventEmitter<string>()

  @Input() jobAddress?: string
  @Output() jobAddressChange = new EventEmitter<string>()

  currentJobAddress?: string

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.jobAddress = this.customer?.homeAddress
  }

  addJobAddress(address: string) {
    // Nullish treatment
    if (!this.customer?.id) { return }

    this.customer.jobAddress.push(address)
    this.customerService.update(this.customer.id, this.customer).subscribe(
      () => {
        this.changeJobAddress(address)
      })
  }

  setCurrentJobAddress(address: string) {
    this.currentJobAddress = address
  }

  editJobAddress(address: string) {
    // Nullish treatment
    if (!this.customer?.id) { return }

    // Update the jobAddress at the currentJobAddress index
    const index = this.customer.jobAddress.indexOf(this.currentJobAddress!)
    this.customer.jobAddress[index] = address
    this.customerService.update(this.customer.id, this.customer).subscribe(
      () => {
        this.changeJobAddress(address)
      })
  }

  deleteJobAddress() {
    // Nullish treatment
    if (!this.customer?.id) { return }

    this.customer.jobAddress = this.customer.jobAddress.filter(a => a != this.currentJobAddress)
    this.customerService.update(this.customer.id, this.customer).subscribe(
      () => { 
        if (this.jobAddress == this.currentJobAddress) {
          this.changeJobAddress(undefined)
        }
      })
  }

  onNotesChange(newNotes: string) {
    this.notesChange.emit(newNotes)
  }

  changeJobAddress(address?: string) {
    this.jobAddress = address
    this.jobAddressChange.emit(address)
  }
}

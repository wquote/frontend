import { Component, OnInit } from '@angular/core';
import { MaterialOrder, MaterialOrderItem } from 'src/app/shared/material-order.model';
import { DmoFootingsService } from './dmo-footings.service';

@Component({
  selector: 'app-dmo-footings-list',
  templateUrl: './dmo-footings.component.html',
  styleUrl: './dmo-footings.component.css'
})
export class DmoFootingsComponent implements OnInit {

  dmoFootings: MaterialOrder = new MaterialOrder()

  constructor(
    private dmoFootingsService: DmoFootingsService,
  ) { }

  ngOnInit(): void {
    this.readAllFootings()
  }

  readAllFootings(): void {
    this.dmoFootingsService.readAll()
      .subscribe(dmoFootings => {
        this.dmoFootings = dmoFootings[0]
      })
  }

  addMaterialOrderItem(item: MaterialOrderItem) {
    if (!this.dmoFootings.id || !item.id) return

    this.dmoFootings.materials.push(item)
    this.dmoFootingsService.update(this.dmoFootings.id, this.dmoFootings)
      .subscribe(_ => {
        this.readAllFootings()
      })
  }

  deleteMaterialOrderItem(item: MaterialOrderItem) {
    if (!this.dmoFootings.id || !item.id) return

    this.dmoFootings.materials = this.dmoFootings.materials
      .filter((material: MaterialOrderItem) => material.id !== item.id)
    
      this.dmoFootingsService.update(this.dmoFootings.id, this.dmoFootings)
      .subscribe(_ => {
        this.readAllFootings()
      })
  }
}

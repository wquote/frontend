import { Component, OnInit } from '@angular/core';
import { MaterialOrder, MaterialOrderItem } from 'src/app/shared/material-order.model';
import { DmoGalvanizedService } from './dmo-galvanized.service';

@Component({
  selector: 'app-dmo-galvanized',
  templateUrl: './dmo-galvanized.component.html',
  styleUrl: './dmo-galvanized.component.css'
})
export class DmoGalvanizedComponent implements OnInit {
  dmoGalvanized: MaterialOrder = new MaterialOrder()

  constructor(
    private dmoGalvanizedService: DmoGalvanizedService,
  ) { }

  ngOnInit(): void {
    this.readAllGalvanized()
  }

  readAllGalvanized(): void {
    this.dmoGalvanizedService.readAll()
      .subscribe(dmoGalvanized => {
        this.dmoGalvanized = dmoGalvanized[0]
      })
  }

  addMaterialOrderItem(item: MaterialOrderItem) {
    if (!this.dmoGalvanized.id || !item.id) return

    this.dmoGalvanized.materials.push(item)
    this.dmoGalvanizedService.update(this.dmoGalvanized.id, this.dmoGalvanized)
      .subscribe(_ => {
        this.readAllGalvanized()
      })
  }

  deleteMaterialOrderItem(item: MaterialOrderItem) {
    if (!this.dmoGalvanized.id || !item.id) return

    this.dmoGalvanized.materials = this.dmoGalvanized.materials
      .filter((material: MaterialOrderItem) => material.id !== item.id)

    this.dmoGalvanizedService.update(this.dmoGalvanized.id, this.dmoGalvanized)
      .subscribe(_ => {
        this.readAllGalvanized()
      })
  }
}

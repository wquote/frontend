import { Component, OnInit } from '@angular/core';
import { MaterialOrder, MaterialOrderItem } from 'src/app/shared/material-order.model';
import { DmoFrameService } from './dmo-frame.service';

@Component({
  selector: 'app-dmo-frame-list',
  templateUrl: './dmo-frame.component.html',
  styleUrl: './dmo-frame.component.css'
})
export class DmoFrameComponent implements OnInit {
  dmoFrame: MaterialOrder = new MaterialOrder()

  constructor(
    private dmoFrameService: DmoFrameService,
  ) { }

  ngOnInit(): void {
    this.readAllFrames()
  }

  readAllFrames(): void {
    this.dmoFrameService.readAll()
      .subscribe(dmoFrame => {
        this.dmoFrame = dmoFrame[0]
      })
  }

  addMaterialOrderItem(item: MaterialOrderItem) {
    if (!this.dmoFrame.id || !item.id) return

    this.dmoFrame.materials.push(item)
    this.dmoFrameService.update(this.dmoFrame.id, this.dmoFrame)
      .subscribe(_ => {
        this.readAllFrames()
      })
  }

  deleteMaterialOrderItem(item: MaterialOrderItem) {
    if (!this.dmoFrame.id || !item.id) return

    this.dmoFrame.materials = this.dmoFrame.materials
      .filter((material: MaterialOrderItem) => material.id !== item.id)

    this.dmoFrameService.update(this.dmoFrame.id, this.dmoFrame)
      .subscribe(_ => {
        this.readAllFrames()
      })
  }
}

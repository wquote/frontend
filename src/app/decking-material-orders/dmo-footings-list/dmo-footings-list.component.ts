import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/materials/shared/material.service';
import { MaterialOrder } from '../shared/dmo-footing.model';
import { DmoFootingsService } from '../shared/dmo-footings.service';

@Component({
  selector: 'app-dmo-footings-list',
  templateUrl: './dmo-footings-list.component.html',
  styleUrl: './dmo-footings-list.component.css'
})
export class DmoFootingsListComponent implements OnInit {
  footings: MaterialOrder = new MaterialOrder()

  constructor(
    private dmoFootingsService: DmoFootingsService,
  ) { }

  ngOnInit(): void {
    this.readAllFootings()
  }

  readAllFootings(): void {
    this.dmoFootingsService.readAll()
      .subscribe(footings => {
        this.footings = footings[0]
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { MaterialModel } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.css'
})
export class MaterialListComponent implements OnInit {
  materials: MaterialModel[] = []

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.readAllMaterials()
  }

  readAllMaterials(): void {
    this.materialService.readAll()
      .subscribe(materials => {
        this.materials = materials
      })
  }
}

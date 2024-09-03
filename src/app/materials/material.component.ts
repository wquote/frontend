import { Component, OnInit } from '@angular/core';
import { MaterialModel } from './material.model';
import { MaterialService } from './material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent implements OnInit {
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

  createMaterial(material: MaterialModel): void {
    this.materialService.create(material)
      .subscribe(_ => {
        this.readAllMaterials()
      })
  }

  updateMaterial(material: MaterialModel): void {
    if (!material.id) return

    this.materialService.update(material.id, material)
      .subscribe(_ => {
        this.readAllMaterials()
      })
  }

  deleteMaterial(material: MaterialModel): void {
    if (!material.id) return

    this.materialService.delete(material.id)
      .subscribe(_ => {
        this.readAllMaterials()
      })
  }
}

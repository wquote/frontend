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
  materialToDelete: MaterialModel | undefined
  deleteMaterialModal: any
  searchTerm: string = ''
  filteredMaterials: MaterialModel[] = []

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.readAllMaterials()
  }

  readAllMaterials(): void {
    this.materialService.readAll()
      .subscribe(materials => {
        this.materials = materials
        this.filteredMaterials = this.materials
      })
  }

  // Filter materials by first name, last name, or home address
  filterMaterials(): void {
    if (!this.searchTerm) {
      this.filteredMaterials = this.materials
      return
    }

    this.filteredMaterials = this.materials.filter(material => {
      const desc: string | undefined = material.desc?.toLowerCase()
      const searchTermLower = this.searchTerm.toLowerCase()

      return desc?.includes(searchTermLower)
    })
  }

  updateCustomerToDelete(material: MaterialModel) {
    this.materialToDelete = material
  }

  deleteMaterial() {
    this.materialToDelete?.id &&
      this.materialService.delete(this.materialToDelete.id)
        .subscribe(
          _ => this.readAllMaterials()
        )
  }
}

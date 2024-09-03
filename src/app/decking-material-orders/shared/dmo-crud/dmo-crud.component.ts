import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MaterialModel } from 'src/app/materials/material.model';
import { MaterialService } from 'src/app/materials/material.service';
import { MaterialOrder, MaterialOrderItem } from 'src/app/shared/material-order.model';

@Component({
  selector: 'app-dmo-crud',
  templateUrl: './dmo-crud.component.html',
  styleUrl: './dmo-crud.component.css'
})
export class DmoCrudComponent implements OnInit, OnChanges {

  @Input() subtitle: string = ''
  @Input() dmo: MaterialOrder = new MaterialOrder()
  @Input() endpointSufix: string = ''

  @Output() onMaterialOrderItemAdd = new EventEmitter<MaterialOrderItem>
  @Output() onMaterialOrderItemDelete = new EventEmitter<MaterialOrderItem>

  keys: string[] = ['name']
  keysTypes: string[] = ['text']
  columns: string[] = ['Name']
  actions: string[] = ['create', 'delete']
  searchColumns: string[] = ['name']

  materials: MaterialModel[] = []
  searchTerm: string = ''
  filteredItems: any[] = []
  setToCreate: any = {}

  materialOrderItemId: string = ''
  itemToEdit: any = {}
  itemToDelete: MaterialOrderItem = new MaterialOrderItem()

  constructor(
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {
    this.readAllMaterials()
  }

  ngOnChanges(): void {
    this.filteredItems = this.dmo.materials
  }

  private readAllMaterials() {
    this.materialService.readAll()
      .subscribe((materials: MaterialModel[]) => {
        this.materials = materials
      })
  }

  filterItems(): void {
    if (this.searchTerm == '') {
      this.filteredItems = this.dmo.materials
      return
    }

    this.filteredItems = this.dmo.materials.filter(item => {
      for (const column of this.searchColumns) {
        const value = (item as any)[column]?.toLowerCase()
        const searchTermLower = this.searchTerm.toLowerCase()

        if (value?.includes(searchTermLower)) return true
      }
      return false
    })
  }

  createSet(): void {
    null
  }

  addMaterialOrderItem(): void {
    for (let index = 0; index < this.dmo.materials.length; index++) {
      const element = this.dmo.materials[index]
      if (element.id == this.materialOrderItemId) {
        window.alert('Item already exists.')
        return
      }
    }

    const newMaterialOrderItem = {
      id: this.materialOrderItemId,
    }

    this.onMaterialOrderItemAdd.emit(newMaterialOrderItem)

    this.materialOrderItemId = ''
  }

  setItemToEdit(item: any): void {
    this.itemToEdit = { ...item }
  }

  editItem(): void {
    null
  }

  setItemToDelete(item: MaterialOrderItem): void {
    this.itemToDelete = { ...item }
  }

  deleteMaterialOrderItem(): void {
    this.onMaterialOrderItemDelete.emit(this.itemToDelete)
    this.itemToDelete = new MaterialOrderItem()
  }
}

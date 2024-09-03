import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core'

@Component({
  selector: 'app-item-list-crud',
  templateUrl: './item-list-crud.component.html',
  styleUrl: './item-list-crud.component.css'
})
export class ListComponent implements OnChanges {
  @Input() title: string = ''
  @Input() items: any[] = []
  @Input() keys: string[] = []
  @Input() columns: string[] = []
  @Input() searchColumns: string[] = []
  @Input() actions: string[] = []
  // @Input() url: string = ''

  @Output() onCreateItem = new EventEmitter<any>
  @Output() onUpdateItem = new EventEmitter<any>
  @Output() onDeleteItem = new EventEmitter<any>

  searchTerm: string = ''
  filteredItems: any[] = []
  itemToCreate: any = {}
  itemToEdit: any = {}
  itemToDelete: any = {}

  constructor() { }

  ngOnChanges(): void {
    this.filteredItems = this.items
  }

  filterItems(): void {
    if (this.searchTerm == '') {
      this.filteredItems = this.items
      return
    }

    this.filteredItems = this.items.filter(item => {
      for (const column of this.searchColumns) {
        const value = item[column]?.toLowerCase()
        const searchTermLower = this.searchTerm.toLowerCase()

        if (value?.includes(searchTermLower)) return true
      }
      return false
    })
  }

  createItem(): void {
    this.onCreateItem.emit(this.itemToCreate)
  }

  setItemToEdit(item: any): void {
    this.itemToEdit = { ...item }
  }

  updateItem(): void {
    this.onUpdateItem.emit(this.itemToEdit)
  }

  setItemToDelete(item: any): void {
    this.itemToDelete = { ...item }
  }

  deleteItem(): void {
    this.onDeleteItem.emit(this.itemToDelete)
  }
}

import { Component, Input, OnChanges } from '@angular/core'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnChanges {
  @Input() title: string = ''
  @Input() items: any[] = []
  @Input() keys: string[] = []
  @Input() columns: string[] = []
  @Input() searchColumns: string[] = []
  @Input() endpoint: string = ''

  searchTerm: string = ''
  filteredItems: any[] = []

  constructor() { }

  ngOnChanges(): void {
    this.filteredItems = this.items
  }

  filterItems(): void {
    if (!this.searchTerm) {
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
}

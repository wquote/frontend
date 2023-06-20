import { Component } from '@angular/core';
import { DeckModel } from 'src/app/models/deck-quote.model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent {
  // decks: DeckModel[] = []
  // deckToDelete: DeckModel | null = null
  // deleteDeckModal: any

  // constructor(private deckService: DeckService) { }

  // ngOnInit(): void {
  //   this.deckService.readAll().subscribe(
  //     response => this.decks = response
  //   )
  // }

  // updateCustomerToDelete(customer: DeckModel) {
  //   this.deckToDelete = customer
  // }

  // deleteDeck() {
  //   this.deckToDelete?.id && this.deckService.delete(this.deckToDelete.id).subscribe(
  //     () => this.ngOnInit()
  //   )
  // }
}

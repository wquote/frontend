import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeckModel } from 'src/app/models/deck-quote.model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck-edit',
  templateUrl: './deck-edit.component.html',
  styleUrls: ['./deck-edit.component.css']
})
export class DeckEditComponent {
  deckId: string = ''
  deck: DeckModel | null = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private deckService: DeckService
  ) { }

  ngOnInit(): void {
    this.deckId = String(this.activatedRoute.snapshot.paramMap.get('id'))
    
    this.deckId && this.deckService.read(this.deckId).subscribe(d => this.deck = d)
  }

  submit() {
    this.save().subscribe( () => this.router.navigate(['/decks/list']) )
  }

  save(): Observable<DeckModel> {
    return this.deckId ? this.deckService.update(this.deckId, this.deck!) : this.deckService.create(this.deck!)
  }

  onClick() {
    console.log("click")
  }
}

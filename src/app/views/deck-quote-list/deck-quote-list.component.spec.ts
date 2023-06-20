import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckQuoteListComponent } from './deck-quote-list.component';

describe('DeckQuoteListComponent', () => {
  let component: DeckQuoteListComponent;
  let fixture: ComponentFixture<DeckQuoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckQuoteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckQuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

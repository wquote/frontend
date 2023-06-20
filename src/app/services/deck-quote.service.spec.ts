import { TestBed } from '@angular/core/testing';

import { DeckQuoteService } from './deck-quote.service';

describe('DeckQuoteService', () => {
  let service: DeckQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

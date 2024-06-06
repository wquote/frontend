import { TestBed } from '@angular/core/testing';

import { DeckingQuoteService } from './decking-quote.service';

describe('DeckingQuoteService', () => {
  let service: DeckingQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckingQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

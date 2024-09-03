import { TestBed } from '@angular/core/testing';

import { DmoService } from './dmo.service';

describe('DmoService', () => {
  let service: DmoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

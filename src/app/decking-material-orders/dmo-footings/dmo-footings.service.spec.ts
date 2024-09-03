import { TestBed } from '@angular/core/testing';

import { DmoFootingsService } from './dmo-footings.service';

describe('DmoFootingsService', () => {
  let service: DmoFootingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmoFootingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DmoGalvanizedService } from './dmo-galvanized.service';

describe('DmoGalvanizedService', () => {
  let service: DmoGalvanizedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmoGalvanizedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

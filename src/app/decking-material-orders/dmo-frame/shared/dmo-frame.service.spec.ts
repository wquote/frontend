import { TestBed } from '@angular/core/testing';

import { DmoFrameService } from './dmo-frame.service';

describe('DmoFrameService', () => {
  let service: DmoFrameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmoFrameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

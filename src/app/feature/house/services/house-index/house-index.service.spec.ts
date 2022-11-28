import { TestBed } from '@angular/core/testing';

import { HouseIndexService } from './house-index.service';

describe('HouseIndexService', () => {
  let service: HouseIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

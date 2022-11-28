import { TestBed } from '@angular/core/testing';

import { HouseDetailsService } from './house-details.service';

describe('HouseDetailsService', () => {
  let service: HouseDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

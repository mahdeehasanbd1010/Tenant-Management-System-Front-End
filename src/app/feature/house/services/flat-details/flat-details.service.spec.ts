import { TestBed } from '@angular/core/testing';

import { FlatDetailsService } from './flat-details.service';

describe('FlatDetailsService', () => {
  let service: FlatDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

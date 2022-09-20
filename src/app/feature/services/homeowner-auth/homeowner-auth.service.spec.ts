import { TestBed } from '@angular/core/testing';

import { HomeownerAuthService } from './homeowner-auth.service';

describe('HomeownerAuthService', () => {
  let service: HomeownerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeownerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

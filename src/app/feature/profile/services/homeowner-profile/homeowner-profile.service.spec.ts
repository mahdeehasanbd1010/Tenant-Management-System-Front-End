import { TestBed } from '@angular/core/testing';

import { HomeownerProfileService } from './homeowner-profile.service';

describe('HomeownerProfileService', () => {
  let service: HomeownerProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeownerProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TenantProfileService } from './tenant-profile.service';

describe('TenantProfileService', () => {
  let service: TenantProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

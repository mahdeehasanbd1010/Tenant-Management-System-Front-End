import { TestBed } from '@angular/core/testing';

import { TenantAuthService } from './tenant-auth.service';

describe('TenantAuthService', () => {
  let service: TenantAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

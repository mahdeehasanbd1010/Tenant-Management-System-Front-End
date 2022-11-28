import { TestBed } from '@angular/core/testing';

import { TenantFormService } from './tenant-form.service';

describe('TenantFormService', () => {
  let service: TenantFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddUtilityBillService } from './add-utility-bill.service';

describe('AddUtilityBillService', () => {
  let service: AddUtilityBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUtilityBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PayMonthBillService } from './pay-month-bill.service';

describe('PayMonthBillService', () => {
  let service: PayMonthBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayMonthBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

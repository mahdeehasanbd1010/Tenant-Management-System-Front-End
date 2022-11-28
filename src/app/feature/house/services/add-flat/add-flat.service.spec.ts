import { TestBed } from '@angular/core/testing';

import { AddFlatService } from './add-flat.service';

describe('AddFlatService', () => {
  let service: AddFlatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFlatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

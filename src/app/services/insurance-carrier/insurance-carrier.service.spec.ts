import { TestBed } from '@angular/core/testing';

import { InsuranceCarrierService } from './insurance-carrier.service';

describe('InsuranceCarrierService', () => {
  let service: InsuranceCarrierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceCarrierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FaersServiceService } from './faers-service.service';

describe('FaersServiceService', () => {
  let service: FaersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PelisApiServiceService } from './pelis-api-service.service';

describe('PelisApiServiceService', () => {
  let service: PelisApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelisApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

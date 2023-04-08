import { TestBed } from '@angular/core/testing';

import { SQLserviceService } from './sqlservice.service';

describe('SQLserviceService', () => {
  let service: SQLserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SQLserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

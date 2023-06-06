import { TestBed } from '@angular/core/testing';

import { EbService } from './eb.service';

describe('EbService', () => {
  let service: EbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

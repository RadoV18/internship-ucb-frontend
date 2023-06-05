import { TestBed } from '@angular/core/testing';

import { BearerInterceptor } from './bearer.interceptor';

describe('BearerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BearerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BearerInterceptor = TestBed.inject(BearerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

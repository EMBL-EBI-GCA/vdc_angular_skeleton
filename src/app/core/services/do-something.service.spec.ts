import { TestBed, inject } from '@angular/core/testing';

import { DoSomethingService } from './do-something.service';

describe('DoSomethingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoSomethingService]
    });
  });

  it('should be created', inject([DoSomethingService], (service: DoSomethingService) => {
    expect(service).toBeTruthy();
  }));
});

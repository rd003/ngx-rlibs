import { TestBed } from '@angular/core/testing';

import { RlibsService } from './rlibs.service';

describe('RlibsService', () => {
  let service: RlibsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RlibsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

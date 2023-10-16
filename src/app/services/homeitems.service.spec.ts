import { TestBed } from '@angular/core/testing';

import { HomeitemsService } from './homeitems.service';

describe('HomeitemsService', () => {
  let service: HomeitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

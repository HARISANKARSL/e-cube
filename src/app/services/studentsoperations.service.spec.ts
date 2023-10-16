import { TestBed } from '@angular/core/testing';

import { StudentsoperationsService } from './studentsoperations.service';

describe('StudentsoperationsService', () => {
  let service: StudentsoperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsoperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

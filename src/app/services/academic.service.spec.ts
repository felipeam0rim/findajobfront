import { TestBed } from '@angular/core/testing';

import { AcademicService } from './academic.service';

describe('UserService', () => {
  let service: AcademicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

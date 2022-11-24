import { TestBed } from '@angular/core/testing';

import { StudentShelveService } from './student-shelve.service';

describe('StudentShelveService', () => {
  let service: StudentShelveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentShelveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

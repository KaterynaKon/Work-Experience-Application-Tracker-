import { TestBed } from '@angular/core/testing';
import { WorktrackerData } from './worktracker-data';

describe('WorktrackerData', () => {
  let service: WorktrackerData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorktrackerData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

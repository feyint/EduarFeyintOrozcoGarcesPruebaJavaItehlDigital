import { TestBed } from '@angular/core/testing';

import { ItehlService } from './itehl.service';

describe('ItehlService', () => {
  let service: ItehlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItehlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GlebeService } from './glebe.service';

describe('GlebeService', () => {
  let service: GlebeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlebeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

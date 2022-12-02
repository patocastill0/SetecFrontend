import { TestBed } from '@angular/core/testing';

import { CluaService } from './clua.service';

describe('CluaService', () => {
  let service: CluaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CluaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InstructorcursoService } from './instructorcurso.service';

describe('InstructorcursoService', () => {
  let service: InstructorcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstructorcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

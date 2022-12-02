import { TestBed } from '@angular/core/testing';

import { TrabajadorcursoService } from './trabajadorcurso.service';

describe('TrabajadorcursoService', () => {
  let service: TrabajadorcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajadorcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

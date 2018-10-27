import { TestBed } from '@angular/core/testing';

import { TipocontratosService } from './tipocontratos.service';

describe('TipocontratosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipocontratosService = TestBed.get(TipocontratosService);
    expect(service).toBeTruthy();
  });
});

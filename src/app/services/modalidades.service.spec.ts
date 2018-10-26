import { TestBed } from '@angular/core/testing';

import { ModalidadesService } from './modalidades.service';

describe('ModalidadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalidadesService = TestBed.get(ModalidadesService);
    expect(service).toBeTruthy();
  });
});

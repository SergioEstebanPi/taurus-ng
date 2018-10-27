import { TestBed } from '@angular/core/testing';

import { CompaniasService } from './companias.service';

describe('CompaniasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompaniasService = TestBed.get(CompaniasService);
    expect(service).toBeTruthy();
  });
});

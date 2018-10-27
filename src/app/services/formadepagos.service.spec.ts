import { TestBed } from '@angular/core/testing';

import { FormadepagosService } from './formadepagos.service';

describe('FormadepagosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormadepagosService = TestBed.get(FormadepagosService);
    expect(service).toBeTruthy();
  });
});

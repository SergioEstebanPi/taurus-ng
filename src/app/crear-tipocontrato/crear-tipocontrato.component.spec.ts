import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipocontratoComponent } from './crear-tipocontrato.component';

describe('CrearTipocontratoComponent', () => {
  let component: CrearTipocontratoComponent;
  let fixture: ComponentFixture<CrearTipocontratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTipocontratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

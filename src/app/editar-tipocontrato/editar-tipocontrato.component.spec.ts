import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipocontratoComponent } from './editar-tipocontrato.component';

describe('EditarTipocontratoComponent', () => {
  let component: EditarTipocontratoComponent;
  let fixture: ComponentFixture<EditarTipocontratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTipocontratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

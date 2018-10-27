import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocontratosComponent } from './tipocontratos.component';

describe('TipocontratosComponent', () => {
  let component: TipocontratosComponent;
  let fixture: ComponentFixture<TipocontratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipocontratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipocontratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

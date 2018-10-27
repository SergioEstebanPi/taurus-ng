import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTipocontratoComponent } from './ver-tipocontrato.component';

describe('VerTipocontratoComponent', () => {
  let component: VerTipocontratoComponent;
  let fixture: ComponentFixture<VerTipocontratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTipocontratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTipocontratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

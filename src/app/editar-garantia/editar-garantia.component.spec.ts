import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGarantiaComponent } from './editar-garantia.component';

describe('EditarGarantiaComponent', () => {
  let component: EditarGarantiaComponent;
  let fixture: ComponentFixture<EditarGarantiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarGarantiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGarantiaComponent } from './crear-garantia.component';

describe('CrearGarantiaComponent', () => {
  let component: CrearGarantiaComponent;
  let fixture: ComponentFixture<CrearGarantiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearGarantiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

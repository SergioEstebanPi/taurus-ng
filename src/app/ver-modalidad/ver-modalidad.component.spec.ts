import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerModalidadComponent } from './ver-modalidad.component';

describe('VerModalidadComponent', () => {
  let component: VerModalidadComponent;
  let fixture: ComponentFixture<VerModalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerModalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerGarantiaComponent } from './ver-garantia.component';

describe('VerGarantiaComponent', () => {
  let component: VerGarantiaComponent;
  let fixture: ComponentFixture<VerGarantiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerGarantiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

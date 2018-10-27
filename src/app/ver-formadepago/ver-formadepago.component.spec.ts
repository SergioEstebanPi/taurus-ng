import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFormadepagoComponent } from './ver-formadepago.component';

describe('VerFormadepagoComponent', () => {
  let component: VerFormadepagoComponent;
  let fixture: ComponentFixture<VerFormadepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFormadepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerFormadepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

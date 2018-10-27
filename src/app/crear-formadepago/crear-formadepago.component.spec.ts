import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormadepagoComponent } from './crear-formadepago.component';

describe('CrearFormadepagoComponent', () => {
  let component: CrearFormadepagoComponent;
  let fixture: ComponentFixture<CrearFormadepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFormadepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormadepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

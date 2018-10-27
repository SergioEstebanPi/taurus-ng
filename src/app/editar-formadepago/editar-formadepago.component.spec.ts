import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormadepagoComponent } from './editar-formadepago.component';

describe('EditarFormadepagoComponent', () => {
  let component: EditarFormadepagoComponent;
  let fixture: ComponentFixture<EditarFormadepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFormadepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFormadepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

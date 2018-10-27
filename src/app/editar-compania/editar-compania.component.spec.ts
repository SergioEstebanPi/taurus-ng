import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCompaniaComponent } from './editar-compania.component';

describe('EditarCompaniaComponent', () => {
  let component: EditarCompaniaComponent;
  let fixture: ComponentFixture<EditarCompaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCompaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

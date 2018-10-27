import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadepagosComponent } from './formadepagos.component';

describe('FormadepagosComponent', () => {
  let component: FormadepagosComponent;
  let fixture: ComponentFixture<FormadepagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormadepagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormadepagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

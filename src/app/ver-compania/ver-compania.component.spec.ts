import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCompaniaComponent } from './ver-compania.component';

describe('VerCompaniaComponent', () => {
  let component: VerCompaniaComponent;
  let fixture: ComponentFixture<VerCompaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCompaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCompaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

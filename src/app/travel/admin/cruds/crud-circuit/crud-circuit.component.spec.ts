import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCircuitComponent } from './crud-circuit.component';

describe('CrudCircuitComponent', () => {
  let component: CrudCircuitComponent;
  let fixture: ComponentFixture<CrudCircuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCircuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEtapeComponent } from './crud-etape.component';

describe('CrudEtapeComponent', () => {
  let component: CrudEtapeComponent;
  let fixture: ComponentFixture<CrudEtapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEtapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

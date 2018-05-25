import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLieuComponent } from './crud-lieu.component';

describe('CrudLieuComponent', () => {
  let component: CrudLieuComponent;
  let fixture: ComponentFixture<CrudLieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

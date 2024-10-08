/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SqlServerComponent } from './sql-server.component';

describe('SqlServerComponent', () => {
  let component: SqlServerComponent;
  let fixture: ComponentFixture<SqlServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

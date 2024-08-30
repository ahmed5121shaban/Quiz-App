/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularQuestionsComponent } from './angular-questions.component';

describe('AngularQuestionsComponent', () => {
  let component: AngularQuestionsComponent;
  let fixture: ComponentFixture<AngularQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

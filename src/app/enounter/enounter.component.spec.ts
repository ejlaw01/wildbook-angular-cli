/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnounterComponent } from './enounter.component';

describe('EnounterComponent', () => {
  let component: EnounterComponent;
  let fixture: ComponentFixture<EnounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BiologicalSamplesComponent } from './biological-samples.component';

describe('BiologicalSamplesComponent', () => {
  let component: BiologicalSamplesComponent;
  let fixture: ComponentFixture<BiologicalSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologicalSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologicalSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

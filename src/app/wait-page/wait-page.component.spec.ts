/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WaitPageComponent } from './wait-page.component';

describe('WaitPageComponent', () => {
  let component: WaitPageComponent;
  let fixture: ComponentFixture<WaitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

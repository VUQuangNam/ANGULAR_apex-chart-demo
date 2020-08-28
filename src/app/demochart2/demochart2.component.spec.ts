import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demochart2Component } from './demochart2.component';

describe('Demochart2Component', () => {
  let component: Demochart2Component;
  let fixture: ComponentFixture<Demochart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demochart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demochart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

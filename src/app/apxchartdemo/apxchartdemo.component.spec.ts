import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxchartdemoComponent } from './apxchartdemo.component';

describe('ApxchartdemoComponent', () => {
  let component: ApxchartdemoComponent;
  let fixture: ComponentFixture<ApxchartdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApxchartdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApxchartdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

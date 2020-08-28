import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvanjsComponent } from './canvanjs.component';

describe('CanvanjsComponent', () => {
  let component: CanvanjsComponent;
  let fixture: ComponentFixture<CanvanjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvanjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvanjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

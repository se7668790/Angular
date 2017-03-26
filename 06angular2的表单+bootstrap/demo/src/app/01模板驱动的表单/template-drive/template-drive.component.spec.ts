import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 模板驱动的表单Component } from './模板驱动的表单.component';

describe('模板驱动的表单Component', () => {
  let component: 模板驱动的表单Component;
  let fixture: ComponentFixture<模板驱动的表单Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 模板驱动的表单Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(模板驱动的表单Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

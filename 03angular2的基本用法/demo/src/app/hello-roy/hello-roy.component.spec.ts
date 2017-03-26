import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloRoyComponent } from './hello-roy.component';

describe('HelloRoyComponent', () => {
  let component: HelloRoyComponent;
  let fixture: ComponentFixture<HelloRoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloRoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloRoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbootstrapComponent } from './testbootstrap.component';

describe('TestbootstrapComponent', () => {
  let component: TestbootstrapComponent;
  let fixture: ComponentFixture<TestbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

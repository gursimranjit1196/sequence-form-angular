import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineOeComponent } from './online-oe.component';

describe('OnlineOeComponent', () => {
  let component: OnlineOeComponent;
  let fixture: ComponentFixture<OnlineOeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineOeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineOeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

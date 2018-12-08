import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricsComponent } from './matrics.component';

describe('MatricsComponent', () => {
  let component: MatricsComponent;
  let fixture: ComponentFixture<MatricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsaComponent } from './hsa.component';

describe('HsaComponent', () => {
  let component: HsaComponent;
  let fixture: ComponentFixture<HsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFeedComponent } from './file-feed.component';

describe('FileFeedComponent', () => {
  let component: FileFeedComponent;
  let fixture: ComponentFixture<FileFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittweetComponent } from './edittweet.component';

describe('EdittweetComponent', () => {
  let component: EdittweetComponent;
  let fixture: ComponentFixture<EdittweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

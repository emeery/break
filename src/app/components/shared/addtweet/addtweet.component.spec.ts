import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtweetComponent } from './addtweet.component';

describe('AddtweetComponent', () => {
  let component: AddtweetComponent;
  let fixture: ComponentFixture<AddtweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

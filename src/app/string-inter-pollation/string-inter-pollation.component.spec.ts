import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterPollationComponent } from './string-inter-pollation.component';

describe('StringInterPollationComponent', () => {
  let component: StringInterPollationComponent;
  let fixture: ComponentFixture<StringInterPollationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringInterPollationComponent]
    });
    fixture = TestBed.createComponent(StringInterPollationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTwoWayDataBindingComponent } from './simple-two-way-data-binding.component';

describe('SimpleTwoWayDataBindingComponent', () => {
  let component: SimpleTwoWayDataBindingComponent;
  let fixture: ComponentFixture<SimpleTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(SimpleTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

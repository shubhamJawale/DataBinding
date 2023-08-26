import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTwoWayDataBindingComponent } from './advanced-two-way-data-binding.component';

describe('AdvancedTwoWayDataBindingComponent', () => {
  let component: AdvancedTwoWayDataBindingComponent;
  let fixture: ComponentFixture<AdvancedTwoWayDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedTwoWayDataBindingComponent]
    });
    fixture = TestBed.createComponent(AdvancedTwoWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

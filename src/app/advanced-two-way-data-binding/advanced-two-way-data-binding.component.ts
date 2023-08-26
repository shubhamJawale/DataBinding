import { Component } from '@angular/core';

@Component({
  selector: 'app-advanced-two-way-data-binding',
  templateUrl: './advanced-two-way-data-binding.component.html',
  styleUrls: ['./advanced-two-way-data-binding.component.css']
})
export class AdvancedTwoWayDataBindingComponent {
  // there is one module as forms module in angular which we can use to simplify our two way binding process
  // so first update the appModule and put forms module in imports array
  textToChange = "sample text";
}

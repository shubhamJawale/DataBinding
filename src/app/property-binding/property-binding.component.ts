import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  // constructor will load when the component gets loaded
  // basic working is simple will set the button on and off every 5 sec of loading the component 
  // setting button state with variable
  buttonToggle = false;
  constructor() {
    setInterval(() => {
      this.buttonToggle = !this.buttonToggle;
    }, 5000);
  }



}

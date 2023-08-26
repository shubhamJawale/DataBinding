import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-two-way-data-binding',
  templateUrl: './simple-two-way-data-binding.component.html',
  styleUrls: ['./simple-two-way-data-binding.component.css']
})
export class SimpleTwoWayDataBindingComponent {
  inputString = "Enter any text here to change the below text";
  // here basically we are creating the function which will read event of the input tag of html element 
  changeTheInputStringFromTheInputPlaceHolder(event: Event) {
    // passing event as param to the function "Event is already existed data type"
    this.inputString = (<HTMLInputElement>event.target).value;
    // giving the type binding to the input element as html input element as indentifier if this event occurs the set the target value to input string
  }
}

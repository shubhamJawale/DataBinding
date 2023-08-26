import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  textOnClick = "button Has been clicked and the string on the event binding is rendered"

  onClickFunction() {
    if (this.textOnClick === "button Has been clicked and the string on the event binding is rendered")
      this.textOnClick = "text is changed so event binding works";
    else
      this.textOnClick = "button Has been clicked and the string on the event binding is rendered";
  }
}

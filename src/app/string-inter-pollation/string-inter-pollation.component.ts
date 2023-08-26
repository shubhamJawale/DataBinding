import { Component } from '@angular/core';

@Component({
  selector: 'app-string-inter-pollation',
  templateUrl: './string-inter-pollation.component.html',
  styleUrls: ['./string-inter-pollation.component.css']
})
export class StringInterPollationComponent {
  // string to show on html template 

  textToShowOnScreen = "text rendered successfully with variable string interpolation";

  showTextOnScreen() {
    return "string interpollation text rendered with function string interpollation"
  }
}

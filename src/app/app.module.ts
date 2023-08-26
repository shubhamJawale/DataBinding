import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StringInterPollationComponent } from './string-inter-pollation/string-inter-pollation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SimpleTwoWayDataBindingComponent } from './simple-two-way-data-binding/simple-two-way-data-binding.component';
import { AdvancedTwoWayDataBindingComponent } from './advanced-two-way-data-binding/advanced-two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StringInterPollationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    MainComponentComponent,
    SimpleTwoWayDataBindingComponent,
    AdvancedTwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // this module is added for advanced two way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

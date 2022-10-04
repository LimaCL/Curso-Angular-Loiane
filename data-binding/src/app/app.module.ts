import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBinding2Component } from './data-binding2/data-binding2.component';
import { DataBinding3Component } from './data-binding3/data-binding3.component';
import { DataBinding4Component } from './data-binding4/data-binding4.component';
import { DataBinding5Component } from './data-binding5/data-binding5.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { DataBinding6Component } from './data-binding6/data-binding6.component';
import { EventOutputComponent } from './event-output/event-output.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBinding2Component,
    DataBinding3Component,
    DataBinding4Component,
    DataBinding5Component,
    InputPropertyComponent,
    DataBinding6Component,
    EventOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

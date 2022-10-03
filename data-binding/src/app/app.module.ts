import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBinding2Component } from './data-binding2/data-binding2.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBinding2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

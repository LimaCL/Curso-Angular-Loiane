import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CursosModule } from './cursos/cursos.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PocBaseComponent } from './unsubscribe-rxjs/poc-base/poc-base.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PocBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

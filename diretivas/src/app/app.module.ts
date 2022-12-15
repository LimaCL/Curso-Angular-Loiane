import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
<<<<<<< HEAD
=======
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { DiretivaNgcontentComponent } from './diretiva-ngcontent/diretiva-ngcontent.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { DiretivaCustomizadasComponent } from './diretiva-customizadas/diretiva-customizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
<<<<<<< HEAD
    DiretivaNgclassComponent
=======
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    DiretivaNgcontentComponent,
    HighlightMouseDirective,
    DiretivaCustomizadasComponent,
    HighlightDirective,
    NgElseDirective
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CursosService } from '../cursos/curso.services';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [CursosComponent],
  providers: [CursosService]
})
export class CursosModule { }

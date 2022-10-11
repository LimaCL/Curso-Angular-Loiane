import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CursosService } from '../cursos/curso.services';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [CriarCursoComponent],
  providers: [CursosService]
})
export class CriarCursoModule { }

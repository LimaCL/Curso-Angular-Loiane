import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }

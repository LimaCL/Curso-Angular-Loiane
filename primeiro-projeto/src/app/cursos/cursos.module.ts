import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [ CursosService]
})
export class CursosModule { }

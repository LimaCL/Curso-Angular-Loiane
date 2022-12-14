import { Component, OnInit } from '@angular/core';
import { CursosService } from './curso.services';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  cursosService!: CursosService;

  constructor(_cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursosService = _cursosService;
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
 
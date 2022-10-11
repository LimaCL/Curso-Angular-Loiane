import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/curso.services';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  constructor(private cursosService: CursosService) { }

  cursos: string [] = [];

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}

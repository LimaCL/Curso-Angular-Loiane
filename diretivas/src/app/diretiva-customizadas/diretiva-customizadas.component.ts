import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-customizadas',
  templateUrl: './diretiva-customizadas.component.html',
  styleUrls: ['./diretiva-customizadas.component.css']
})
export class DiretivaCustomizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  cursos: string[] = ["Angular 2"];

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

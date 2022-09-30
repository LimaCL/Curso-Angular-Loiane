import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos!: string[];


  constructor(public CursosService: CursosService) {
      this.nomePortal = 'http://loiane.training';

      /*for (let i=0; i > this.cursos.length; i++){
        let cursos = this.cursos[i];
      }*/

      //var servicos = new CursosService();

      this.cursos = this.CursosService.getCursos();

   }

  ngOnInit(): void {
  }

}

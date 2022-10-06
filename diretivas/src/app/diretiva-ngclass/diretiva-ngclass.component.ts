import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meufavorito: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.meufavorito = !this.meufavorito;
  }

}

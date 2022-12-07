import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding3',
  templateUrl: './data-binding3.component.html',
  styleUrls: ['./data-binding3.component.css']
})
export class DataBinding3Component implements OnInit {

  valorAtual: string = '';
  valorSalvo!: string;

  isMouseOver: boolean = false;

  botaoclicado(){
    alert("Hello World");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  constructor() { }

  ngOnInit(): void {
  }

}

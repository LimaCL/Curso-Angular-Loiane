import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './event-output.component.html',
  styleUrls: ['./event-output.component.css']
})
export class EventOutputComponent implements OnInit {
  
  valor: number = 0;

  @ViewChild('campoInput') campoValorInput!: HTMLElement;

  incrementa() {
    console.log(this.campoValorInput);
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

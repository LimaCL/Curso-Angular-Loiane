<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a

@Component({
  selector: 'contador',
  templateUrl: './event-output.component.html',
  styleUrls: ['./event-output.component.css']
})
export class EventOutputComponent implements OnInit {
  
  valor: number = 0;

<<<<<<< HEAD
  incrementa() {
=======
  @ViewChild('campoInput') campoValorInput!: HTMLElement;

  incrementa() {
    console.log(this.campoValorInput);
>>>>>>> da8e857bf49800e978645ff6785e1aeddc04c98a
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

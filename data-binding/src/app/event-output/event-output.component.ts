import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './event-output.component.html',
  styleUrls: ['./event-output.component.css']
})
export class EventOutputComponent implements OnInit {
  
  valor: number = 0;

  incrementa() {
    this.valor++;
  }

  decrementa(){
    this.valor--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

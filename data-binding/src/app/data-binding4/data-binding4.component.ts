import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding4',
  templateUrl: './data-binding4.component.html',
  styleUrls: ['./data-binding4.component.css']
})
export class DataBinding4Component implements OnInit {

  nome: string = 'abc';

  pessoa: any = {
    nome: "Lima",
    idade: 20
  }


  constructor() { }

  ngOnInit(): void {
  }

}

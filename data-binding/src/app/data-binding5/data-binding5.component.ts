import { Component, OnInit } from '@angular/core';
import { InputPropertyComponent } from '../input-property/input-property.component';

@Component({
  selector: 'app-data-binding5',
  templateUrl: './data-binding5.component.html',
  styleUrls: ['./data-binding5.component.css']
})
export class DataBinding5Component implements OnInit {

  nomeCurso: string = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}

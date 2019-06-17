import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {


  alerta: string = 'alert-danger';

  propiedades: Propiedades = {
    danger: false
  };

  constructor() {
  }

  ngOnInit() {
  }

}


interface Propiedades {
  danger: boolean
};

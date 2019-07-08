import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      Este es el usuario {{userid }}!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {
  private userid: number;

  constructor(private  route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.userid = params.id;
    });
  }

  ngOnInit() {
  }

}

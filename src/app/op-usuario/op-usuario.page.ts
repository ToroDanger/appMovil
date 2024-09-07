import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-op-usuario',
  templateUrl: './op-usuario.page.html',
  styleUrls: ['./op-usuario.page.scss'],
})
export class OpUsuarioPage implements OnInit {
  diccionario = {
    user:"",
    pw:""
  }

  constructor(private aRoute:ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe(params => {
      this.diccionario.user = params['dataUser']
      this.diccionario.pw = params['dataPw']
    });
  }

}

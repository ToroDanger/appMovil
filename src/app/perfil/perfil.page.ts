import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  diccionario = {
    user:"",
    pw:"",
    email:""
  }

  constructor(private aRoute:ActivatedRoute) { }

  ngOnInit() {

    this.aRoute.queryParams.subscribe(params => {
      this.diccionario.user = params['dataUser']
      this.diccionario.pw = params['dataPw']
      this.diccionario.email = params['dataEmail']
    });
  }

}

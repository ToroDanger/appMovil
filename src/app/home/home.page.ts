import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario = {
    user: "",
    pw: "",
  };

  constructor(private nCtrl:NavController ) {}

  goSegunda() {
    let nExtras:NavigationExtras = {
      queryParams:{
        dataUser: this.usuario.user,
        dataPw: this.usuario.pw
      }
    };
    this.nCtrl.navigateForward(['/op-usuario'],nExtras)

  }

  ngOnInit() {
  }

}

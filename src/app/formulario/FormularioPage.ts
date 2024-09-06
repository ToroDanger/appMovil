import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { NavController } from "@ionic/angular";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  //atributos
  /*
  usuario = {
    user: "",
    pw: "",
    email: "",
  };*/
  constructor(/*private nCtrl:NavController*/ ) { }
  //metodos
  /*
  goSeg() {
    let nExtras:NavigationExtras = {
      queryParams:{
        dataUser: this.usuario.user,
        dataPw: this.usuario.pw,
        dataEmail: this.usuario.email
      }
    };
    this.nCtrl.navigateForward(['/perfil'],nExtras);
  }*/

  ngOnInit() {
  }

}

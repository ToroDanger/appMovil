import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

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
  private animation!:Animation;

  constructor(private aRoute:ActivatedRoute, private aCtrl:AnimationController ) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe(params => {
      this.diccionario.user = params['dataUser']
      this.diccionario.pw = params['dataPw']
    });
  }
  ngAfterViewInit(){
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.auto') as HTMLElement)
    .iterations(Infinity)
    .duration(7000)
    .keyframes([
      { offset: 0, transform: 'translateY(0px) rotate(1deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateY(0px) rotate(360deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateY(0px) rotate(360deg)', opacity: '0.5 ' }
    ]);
    this.animation.play();
  }

}

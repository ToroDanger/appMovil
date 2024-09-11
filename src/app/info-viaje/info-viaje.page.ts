import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-viaje',
  templateUrl: './info-viaje.page.html',
  styleUrls: ['./info-viaje.page.scss'],
})
export class InfoViajePage implements OnInit {
  private animation!:Animation;
  constructor(private aCtrl:AnimationController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.azul') as HTMLElement)
    .iterations(Infinity)
    .duration(1000)
    .keyframes([
      { offset: 0, transform: 'scale(0) rotate(180deg)', opacity: '1' },
      { offset: 0.5, transform: 'scale(50) rotate(360deg)', opacity: '0.7' },
      { offset: 1, transform: 'scale(100) rotate(720deg)', opacity: '1' }
    ]);
   
  }
  ejecutar(){
    this.animation.play();
    setTimeout(() => {
      this.navCtrl.navigateRoot('/list-viaje');
    }, 700);
  }
}

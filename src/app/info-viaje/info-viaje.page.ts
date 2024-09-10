import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-info-viaje',
  templateUrl: './info-viaje.page.html',
  styleUrls: ['./info-viaje.page.scss'],
})
export class InfoViajePage implements OnInit {
  private animation!:Animation;
  constructor(private aCtrl:AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .iterations(1)
    .duration(1000)
    .keyframes([
      { offset: 0, transform: 'translateY(0px) rotate(0deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateY(300px) rotate(180deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateY(600px) rotate(360deg)', opacity: '0.5 ' }
    ]);
   
  }
  ejecutar(){
    this.animation.play();
  }
}

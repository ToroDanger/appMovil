import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpUsuarioPageRoutingModule } from './op-usuario-routing.module';

import { OpUsuarioPage } from './op-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpUsuarioPageRoutingModule
  ],
  declarations: [OpUsuarioPage]
})
export class OpUsuarioPageModule {}

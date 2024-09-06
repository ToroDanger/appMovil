import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormConductorPageRoutingModule } from './form-conductor-routing.module';

import { FormConductorPage } from './form-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormConductorPageRoutingModule
  ],
  declarations: [FormConductorPage]
})
export class FormConductorPageModule {}

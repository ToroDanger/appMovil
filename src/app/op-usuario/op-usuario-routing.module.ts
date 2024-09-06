import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpUsuarioPage } from './op-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: OpUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpUsuarioPageRoutingModule {}

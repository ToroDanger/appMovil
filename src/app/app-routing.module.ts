import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'op-usuario',
    loadChildren: () => import('./op-usuario/op-usuario.module').then( m => m.OpUsuarioPageModule)
  },
  {
    path: 'list-viaje',
    loadChildren: () => import('./list-viaje/list-viaje.module').then( m => m.ListViajePageModule)
  },
  {
    path: 'form-conductor',
    loadChildren: () => import('./form-conductor/form-conductor.module').then( m => m.FormConductorPageModule)
  },
  {
    path: 'info-viaje',
    loadChildren: () => import('./info-viaje/info-viaje.module').then( m => m.InfoViajePageModule)
  },
  {
    path: 'info-viaje-cond',
    loadChildren: () => import('./info-viaje-cond/info-viaje-cond.module').then( m => m.InfoViajeCondPageModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthRouterGuard } from './guards/auth-router.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./tabs/tab1-home/tab1-home.module').then(
        (m) => m.Tab1HomePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'tab1-home',
    loadChildren: () =>
      import('./tabs/tab1-home/tab1-home.module').then(
        (m) => m.Tab1HomePageModule
      ),
  },
  {
    path: 'tab2-eventos',
    loadChildren: () =>
      import('./tabs/tab2-eventos/tab2-eventos.module').then(
        (m) => m.Tab2EventosPageModule
      ),
    canActivate: [AuthRouterGuard],
  },

  {
    path: 'tab3-add-evento',
    loadChildren: () =>
      import('./tabs/tab3-add-evento/tab3-add-evento.module').then(
        (m) => m.Tab3AddEventoPageModule
      ),
    canActivate: [AuthRouterGuard],
  },
  {
    path: 'tab4-favoritos',
    loadChildren: () =>
      import('./tabs/tab4-favoritos/tab4-favoritos.module').then(
        (m) => m.Tab4FavoritosPageModule
      ),
    canActivate: [AuthRouterGuard],
  },
  {
    path: 'tab5-perfil',
    loadChildren: () =>
      import('./tabs/tab5-perfil/tab5-perfil.module').then(
        (m) => m.Tab5PerfilPageModule
      ),
  },
  {
    path: 'registrar',
    loadChildren: () =>
      import('./pages/registrar/registrar.module').then(
        (m) => m.RegistrarPageModule
      ),
  },
  {
    path: 'meus-eventos',
    loadChildren: () =>
      import('./pages/meus-eventos/meus-eventos.module').then(
        (m) => m.MeusEventosPageModule
      ),
    canActivate: [AuthRouterGuard],
  },
  {
    path: 'perfil-efetuado',
    loadChildren: () =>
      import('./pages/perfil-efetuado/perfil-efetuado.module').then(
        (m) => m.PerfilEfetuadoPageModule
      ),
    canActivate: [AuthRouterGuard],
  },  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

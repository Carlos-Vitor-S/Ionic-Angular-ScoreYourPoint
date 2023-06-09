import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },

  {
    path: 'tab3-add-evento',
    loadChildren: () =>
      import('./tabs/tab3-add-evento/tab3-add-evento.module').then(
        (m) => m.Tab3AddEventoPageModule
      ),
  },
  {
    path: 'tab4-favoritos',
    loadChildren: () =>
      import('./tabs/tab4-favoritos/tab4-favoritos.module').then(
        (m) => m.Tab4FavoritosPageModule
      ),
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
  },  {
    path: 'meus-eventos',
    loadChildren: () => import('./pages/meus-eventos/meus-eventos.module').then( m => m.MeusEventosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

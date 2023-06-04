import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4FavoritosPage } from './tab4-favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4FavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4FavoritosPageRoutingModule {}

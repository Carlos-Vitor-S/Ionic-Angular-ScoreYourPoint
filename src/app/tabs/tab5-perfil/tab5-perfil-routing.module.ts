import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab5PerfilPage } from './tab5-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: Tab5PerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab5PerfilPageRoutingModule {}

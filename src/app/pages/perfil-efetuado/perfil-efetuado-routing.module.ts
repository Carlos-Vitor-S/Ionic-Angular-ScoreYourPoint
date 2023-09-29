import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEfetuadoPage } from './perfil-efetuado.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEfetuadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEfetuadoPageRoutingModule {}

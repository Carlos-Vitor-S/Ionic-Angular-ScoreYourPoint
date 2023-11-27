import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticiparEventoPage } from './participar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ParticiparEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticiparEventoPageRoutingModule {}

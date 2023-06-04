import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3AddEventoPage } from './tab3-add-evento.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3AddEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3AddEventoPageRoutingModule {}

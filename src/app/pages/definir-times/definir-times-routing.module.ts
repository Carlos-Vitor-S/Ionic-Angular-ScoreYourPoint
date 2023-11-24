import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinirTimesPage } from './definir-times.page';

const routes: Routes = [
  {
    path: '',
    component: DefinirTimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinirTimesPageRoutingModule {}

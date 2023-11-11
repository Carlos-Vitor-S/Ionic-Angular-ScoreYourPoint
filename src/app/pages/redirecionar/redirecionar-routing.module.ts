import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirecionarPage } from './redirecionar.page';

const routes: Routes = [
  {
    path: '',
    component: RedirecionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedirecionarPageRoutingModule {}

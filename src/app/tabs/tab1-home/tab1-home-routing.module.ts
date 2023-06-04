import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1HomePage } from './tab1-home.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1HomePageRoutingModule {}

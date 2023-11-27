import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirecionarPageRoutingModule } from './redirecionar-routing.module';

import { RedirecionarPage } from './redirecionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirecionarPageRoutingModule
  ],
  declarations: [RedirecionarPage]
})
export class RedirecionarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinirTimesPageRoutingModule } from './definir-times-routing.module';

import { DefinirTimesPage } from './definir-times.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinirTimesPageRoutingModule
  ],
  declarations: [DefinirTimesPage]
})
export class DefinirTimesPageModule {}

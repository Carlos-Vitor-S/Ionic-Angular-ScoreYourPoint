import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3AddEventoPageRoutingModule } from './tab3-add-evento-routing.module';

import { Tab3AddEventoPage } from './tab3-add-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3AddEventoPageRoutingModule
  ],
  declarations: [Tab3AddEventoPage]
})
export class Tab3AddEventoPageModule {}

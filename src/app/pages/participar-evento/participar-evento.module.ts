import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticiparEventoPageRoutingModule } from './participar-evento-routing.module';

import { ParticiparEventoPage } from './participar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticiparEventoPageRoutingModule,
  ],
  declarations: [ParticiparEventoPage],
})
export class ParticiparEventoPageModule {}

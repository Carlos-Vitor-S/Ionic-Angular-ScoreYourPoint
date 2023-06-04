import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2EventosPageRoutingModule } from './tab2-eventos-routing.module';

import { Tab2EventosPage } from './tab2-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2EventosPageRoutingModule
  ],
  declarations: [Tab2EventosPage]
})
export class Tab2EventosPageModule {}

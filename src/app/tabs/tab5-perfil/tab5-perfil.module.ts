import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PerfilPageRoutingModule } from './tab5-perfil-routing.module';

import { Tab5PerfilPage } from './tab5-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PerfilPageRoutingModule
  ],
  declarations: [Tab5PerfilPage]
})
export class Tab5PerfilPageModule {}

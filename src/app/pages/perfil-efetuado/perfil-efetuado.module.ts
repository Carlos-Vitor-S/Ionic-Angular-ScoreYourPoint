import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEfetuadoPageRoutingModule } from './perfil-efetuado-routing.module';

import { PerfilEfetuadoPage } from './perfil-efetuado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEfetuadoPageRoutingModule
  ],
  declarations: [PerfilEfetuadoPage]
})
export class PerfilEfetuadoPageModule {}

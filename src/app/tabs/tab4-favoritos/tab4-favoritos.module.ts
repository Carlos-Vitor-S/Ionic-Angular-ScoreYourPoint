import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';
import { IonicModule } from '@ionic/angular';

import { Tab4FavoritosPageRoutingModule } from './tab4-favoritos-routing.module';

import { Tab4FavoritosPage } from './tab4-favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4FavoritosPageRoutingModule,
  ],
  declarations: [Tab4FavoritosPage, CardComponent],
})
export class Tab4FavoritosPageModule {}

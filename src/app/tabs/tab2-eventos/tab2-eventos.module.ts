import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2EventosPageRoutingModule } from './tab2-eventos-routing.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { Tab2EventosPage } from './tab2-eventos.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2EventosPageRoutingModule,
  ],
  declarations: [Tab2EventosPage, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab2EventosPageModule {}

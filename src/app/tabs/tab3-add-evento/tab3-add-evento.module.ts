import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3AddEventoPageRoutingModule } from './tab3-add-evento-routing.module';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';
import { Tab3AddEventoPage } from './tab3-add-evento.page';
import { CardTimeComponent } from 'src/app/components/card-time/card-time.component';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3AddEventoPageRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Tab3AddEventoPage, HideHeaderDirective, CardTimeComponent],
})
export class Tab3AddEventoPageModule {}

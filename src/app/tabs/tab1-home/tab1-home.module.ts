import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1HomePageRoutingModule } from './tab1-home-routing.module';

import { Tab1HomePage } from './tab1-home.page';
import { SmallCarroselComponent } from 'src/app/components/small-carrosel/small-carrosel.component';
import { CarroselComponent } from 'src/app/components/carrosel/carrosel.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Tab1HomePageRoutingModule],
  declarations: [Tab1HomePage, CarroselComponent, SmallCarroselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1HomePageModule {}

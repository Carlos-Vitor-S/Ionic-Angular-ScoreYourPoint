import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1HomePageRoutingModule } from './tab1-home-routing.module';

import { Tab1HomePage } from './tab1-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1HomePageRoutingModule
  ],
  declarations: [Tab1HomePage]
})
export class Tab1HomePageModule {}

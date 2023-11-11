import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2-eventos',
  templateUrl: './tab2-eventos.page.html',
  styleUrls: ['./tab2-eventos.page.scss'],
})
export class Tab2EventosPage implements OnInit {
  constructor(private loadingController: LoadingController) {}


  async ionViewDidEnter() {
    await this.presentLoading();
  }

  ngOnInit() {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 1000,
      translucent: true,
    });

    await loading.present();


    const {role, data} = await loading.onDidDismiss();
    console.log('Loading', data);
  }
}

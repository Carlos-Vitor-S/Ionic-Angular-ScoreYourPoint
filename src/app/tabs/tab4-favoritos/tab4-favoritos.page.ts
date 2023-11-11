import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab4-favoritos',
  templateUrl: './tab4-favoritos.page.html',
  styleUrls: ['./tab4-favoritos.page.scss'],
})
export class Tab4FavoritosPage implements OnInit {

  constructor(private loadingController: LoadingController) { }


  async ionViewDidEnter() {
    await this.presentLoading();
  }

  ngOnInit() {
  }

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

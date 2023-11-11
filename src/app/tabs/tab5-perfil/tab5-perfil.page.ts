import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { inUser } from 'src/app/interface/inUser';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab5-perfil',
  templateUrl: './tab5-perfil.page.html',
  styleUrls: ['./tab5-perfil.page.scss'],
})
export class Tab5PerfilPage implements OnInit {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private loadingController: LoadingController
    ) {}


  async ionViewDidEnter() {
    await this.presentLoading();
  }
  ngOnInit() {}

  formLogin = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });
  //logar no firebase
  formSubmitLogin() {
    if (this.formLogin.valid) {
      let userData: inUser = Object.assign({} as inUser, this.formLogin.value);

      this.authService
        .signInWithEmail(userData.email, userData.senha)
        .then((loginCredential) => {
          loginCredential.user?.getIdToken().then(
            (token) => {
              let accessToken = token;
              this.storageService.setLocalstorage('token', accessToken);
              this.storageService.setLocalstorage('user', JSON.stringify(loginCredential.user))
              this.router.navigate(['home'])
            }
          )
          console.log('login sucesso', loginCredential);
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
    this.formLogin.reset();
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

  /*createUser() {
    this.authService.registerWithEmail(this.email, this.senha);
  }*/
}

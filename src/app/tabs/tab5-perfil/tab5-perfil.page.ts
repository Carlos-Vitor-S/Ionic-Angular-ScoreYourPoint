import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { inUser } from 'src/app/interface/inUser';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5-perfil',
  templateUrl: './tab5-perfil.page.html',
  styleUrls: ['./tab5-perfil.page.scss'],
})
export class Tab5PerfilPage implements OnInit {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
    ) {}

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

  /*createUser() {
    this.authService.registerWithEmail(this.email, this.senha);
  }*/
}

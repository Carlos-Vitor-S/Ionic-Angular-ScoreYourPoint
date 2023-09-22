import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { inUser } from 'src/app/interface/inUser';

@Component({
  selector: 'app-tab5-perfil',
  templateUrl: './tab5-perfil.page.html',
  styleUrls: ['./tab5-perfil.page.scss'],
})
export class Tab5PerfilPage implements OnInit {
  constructor(private authService: AuthService) {}

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
        .then(() => {
          console.log('login sucesso');
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

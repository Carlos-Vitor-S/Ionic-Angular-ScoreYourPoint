import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { inUser } from 'src/app/interface/inUser';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  constructor(
    private authservice: AuthService,
    private storageService: StorageService,
    private router: Router
    ) {}
  ngOnInit() {}
  formRegistrar = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  formSubmitRegistrar() {
    if (this.formRegistrar.valid) {
      let userData: inUser = Object.assign(
        {} as inUser,
        this.formRegistrar.value
      );

      this.authservice
        .registerWithEmail(userData.email, userData.senha)
        .then((userCredential) => {
          userCredential.user?.getIdToken().then(
            (accessToken) => {
              this.storageService.setLocalstorage('token', accessToken);
              this.router.navigate(['home'])
            }
          )
        })
        .then((erro) => {
          console.log(erro);
        });
    }
  }
}

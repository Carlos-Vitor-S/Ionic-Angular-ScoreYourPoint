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
  ) { }
  ngOnInit() { }
  formRegistrar = new FormGroup({

    name: new FormControl(''),
    cpf: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  formSubmitRegistrar() {
    if (this.formRegistrar.valid) {
      let userData: inUser = Object.assign(
        {} as inUser,
        this.formRegistrar.value
      );
      this.conectionService(userData)
      this.formRegistrar.reset;
    }
  }

  conectionService(data: inUser) {
    try {
      this.authservice.registerWithEmail(data.email, data.senha).then(
        (userCredential) => {
          userCredential.user?.updateProfile({ displayName: data.name }).then(
            (userUpdate) => {
              this.storageService.setLocalstorage('user', JSON.stringify(userCredential.user))
            }
          )
          userCredential.user?.getIdToken().then(
            (accessToken) => {
              this.storageService.setLocalstorage('token', accessToken);
              this.router.navigate(['home'])
            }
          )
        }
      )
    } catch (error) { }
  }
}

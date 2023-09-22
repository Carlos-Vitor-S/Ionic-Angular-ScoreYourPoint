import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab5-perfil',
  templateUrl: './tab5-perfil.page.html',
  styleUrls: ['./tab5-perfil.page.scss'],
})
export class Tab5PerfilPage implements OnInit {
  constructor(private authService: AuthService) {}
  email: string = 'carlos@gmail.com.br';
  senha: string = '1234567810';
  ngOnInit() {
    this.createUser();
  }
  formPerfil = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  //login de usario com email e senha
  signInEmail() {
    this.authService.signInWithEmail(this.email, this.senha);
  }

  createUser() {
    this.authService.registerWithEmail(this.email, this.senha);
  }
}

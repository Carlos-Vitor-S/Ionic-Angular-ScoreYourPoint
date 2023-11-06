import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-efetuado',
  templateUrl: './perfil-efetuado.page.html',
  styleUrls: ['./perfil-efetuado.page.scss'],
})
export class PerfilEfetuadoPage implements OnInit {
  displayName = '';

  constructor() {}

  ngOnInit() {
    let data = localStorage.getItem('user');
    let user = JSON.parse(data!);
    this.displayName = user.displayName;
  }
}

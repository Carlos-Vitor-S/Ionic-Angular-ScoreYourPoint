import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil-efetuado',
  templateUrl: './perfil-efetuado.page.html',
  styleUrls: ['./perfil-efetuado.page.scss'],
})
export class PerfilEfetuadoPage implements OnInit {
  displayName = '';
  //private subscription: Subscription;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    let data = localStorage.getItem('user');
    let user = JSON.parse(data!);
    this.displayName = user.displayName;
  }

  logout() {
    this.authService.logout();
  }
}

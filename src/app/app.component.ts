import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  name: string
  userData: any

  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit() {
    let userString = this.storageService.getLocalstorage('user')
    this.userData = JSON.parse(userString!)
    if (this.userData) {
      this.name = this.userData.displayName;
    } else {
      this.name = "Perfil";
    }
  }

  isUser() {
    let isLogged = this.storageService.getLocalstorage('user')
    if(isLogged) {
      return true
    } else {
      return false
    }
  }
}

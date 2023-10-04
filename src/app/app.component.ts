import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit{

  displayName = null


  constructor(
  ) {}

  ngOnInit() {
    let data = localStorage.getItem('user')
    let user = JSON.parse(data!)
    this.displayName = user.displayName
  }


}

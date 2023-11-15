import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  displayName = null
  isLoggedIn = false;
  private subscription: Subscription;


  constructor(
    private authService: AuthService
  ) {
    this.subscription = this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      /*let user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if (this.isLoggedIn == true && user != null) {
        let name = user.displayName;
        let firstName = name.split(' ')[0];
        this.displayName = firstName;
        localStorage.setItem('isLoggedIn', true.toString());
        console.log(firstName)
      }*/
    });
    this.subscription = this.authService.nameUserLoggedIn$.subscribe((displayName) => {
      this.displayName = displayName;
    });
  }

  ngOnInit() {
    let t = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (t == true) {
      this.isLoggedIn = t
      this.setName();
    }
  }



  ngOnDestroy() {
    // Certifique-se de cancelar a inscrição para evitar vazamentos de memória
    this.subscription.unsubscribe();
  }

  setName() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (this.isLoggedIn == true && user != null) {
      let name = user.displayName;
      let firstName = name.split(' ')[0];
      this.displayName = firstName;
      localStorage.setItem('isLoggedIn', true.toString());
      console.log(firstName)
    }
  }


}

import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firstName: string
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private nameUserSubject = new BehaviorSubject<string>(null);
  nameUserLoggedIn$ = this.nameUserSubject.asObservable();

  constructor(
    private authentication: AngularFireAuth,
    private storageService: StorageService,
    private router: Router
  ) { }

  signInWithEmail(email: string, senha: string) {
    this.authentication.signInWithEmailAndPassword(email, senha)
      .then((loginCredential) => {
        let userName = loginCredential.user.displayName.split(' ')[0];
        this.firstName = userName;
        loginCredential.user?.getIdToken().then((token) => {
          let accessToken = token;
          this.storageService.setLocalstorage('token', accessToken);
          localStorage.setItem(
            'user',
            JSON.stringify(loginCredential.user)
          );
          this.router.navigate(['home']);
        });
        this.isLoggedInSubject.next(true);
        this.nameUserSubject.next(this.firstName);
        console.log('login sucesso', this.firstName);
        localStorage.setItem('isLoggedIn', true.toString());
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  registerWithEmail(email: string, senha: string) {
    return this.authentication.createUserWithEmailAndPassword(email, senha);
  }
}

import { Injectable, NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authentication: AngularFireAuth) {}

  signInWithEmail(email: string, senha: string) {
    return this.authentication.signInWithEmailAndPassword(email, senha);
  }

  registerWithEmail(email: string, senha: string) {
    return this.authentication.createUserWithEmailAndPassword(email, senha);
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  login() {

  }
  logout(): void {
    this.isLoggedIn = false;
  }

}

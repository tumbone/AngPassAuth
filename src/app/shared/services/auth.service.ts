import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { AuthEntity } from '../models/auth-entity.model';
import { StorageService } from '../services/storage.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AuthService {
  // isLoggedIn = false;
  redirectUrl: string;
  authSvcUrl: string;

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.authSvcUrl = environment.authSvc;
  }

  login(username: string, password: string): Observable<AuthEntity> {
    const url = this.authSvcUrl + 'auth/login';
    const body = { username: username, password: password };
    return this.http.post<AuthEntity>(url, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAllUsers(): Observable<any> {
    const url = this.authSvcUrl + 'users';
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  isLoggedIn(): boolean {
    const authObject = this.storageService.getObjectFromStorage('AuthObject');
    return authObject ? true : false;
  }

  logout(): boolean {
    this.storageService.removeFromStorage('AuthObject');
    return !this.isLoggedIn();
  }

  signUp(user): Observable<any> {
    const url = this.authSvcUrl + 'auth/signup';
    return this.http.post(url, user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { AuthEntity } from '../models/auth-entity.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  authSvcUrl: string;

  constructor(private http: HttpClient) {
    this.authSvcUrl = environment.authSvc;
  }

  login(username: string, password: string): Observable<AuthEntity> {
    const url = this.authSvcUrl + 'auth/login';
    const body = { username: 'testuser', password: 'testpass' };
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

  logout(): void {
    this.isLoggedIn = false;
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { AuthObject } from '../models/auth-object.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  authSvcUrl: string;

  constructor(private http: HttpClient) {
    this.authSvcUrl = environment.authSvc;
  }

  login(username: string, password: string): Observable<AuthObject> {
    const url = this.authSvcUrl + 'login';
    const body = { username: username, password: password };
    return this.http.post<AuthObject>(url, body).pipe(
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

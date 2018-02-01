import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { StorageService } from './shared/services/storage.service';
import { Observable } from 'rxjs/Observable';
import { AuthEntity } from './shared/models/auth-entity.model';

@Injectable()
export class NoopInteceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authEntity = this.storageService.getObjectFromStorage('AuthObject') as AuthEntity;
    const token = authEntity ? authEntity.token : '';
    const authReq = req.clone({ setHeaders: { Authorization: token } });
    return next.handle(authReq);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInteceptor } from './noop.interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInteceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

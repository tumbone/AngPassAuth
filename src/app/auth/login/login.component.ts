import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { StorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password): void {
    this.authService.login(username, password).subscribe((response) => {
      if (response) {
        this.storageService.setObjectToStore('AuthObject', response);
        this.authService.isLoggedIn = true;
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '';
        this.router.navigate([redirectUrl]);
      }
    }, (error) => {
      console.log(error);
    });
  }

}

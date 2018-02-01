import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password): void {
    this.authService.login(username, password).subscribe((response) => {
      if (response) {
        this.authService.isLoggedIn = true;
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '';
        this.router.navigate([redirectUrl]);
      }
    }, (error) => {
      console.log(error);
    });
  }

}

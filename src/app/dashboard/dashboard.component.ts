import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/services/storage.service';
import { AuthEntity } from '../shared/models/auth-entity.model';
import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Ang-Pass-Auth';
  user: User;
  users$: [User];
  constructor(private storageService: StorageService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const authFromStorage = this.storageService.getObjectFromStorage('AuthObject') as AuthEntity;
    this.user = authFromStorage ? authFromStorage.user : undefined;
  }

  getAllUsers(): void {
    this.authService.getAllUsers().subscribe((response) => {
      if (response) { this.users$ = response; }
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  logout(): void {
    if (this.authService.logout()) {
      this.router.navigate(['/login']);
    }
  }

}

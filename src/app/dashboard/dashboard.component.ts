import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { AuthEntity } from '../shared/models/auth-entity.model';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Ang-Pass-Auth';
  user: User;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    const authFromStorage = this.storageService.getObjectFromStore('AuthObject') as AuthEntity;
    this.user = authFromStorage ? authFromStorage.user : undefined;
  }

}

import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService) { }

  signUp(email, password, confirmPassword) {
    if (password === confirmPassword) {
      const newUser = new User();
      newUser.username = email;
      newUser.password = password;
      this.authService.signUp(newUser).subscribe(response => {
        if (response) {
          alert('User created successfully!');
        }
      }, error => {
        alert('Error: Could not create the user!');
      });
    } else {
      alert('Error: Passwords do not match!');
    }
  }

}

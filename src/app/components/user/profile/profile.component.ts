import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private routerService = inject(Router);
  email;
  user;

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) !== null ) {
      this.email = JSON.parse(localStorage.getItem('user')).email;

      if(this.email) {
        this.getUserDetail();
      }
    }
    else {
      this.routerService.navigateByUrl('/login');
    }
  }

  getUserDetail() {
    this.userService.getUserByEmail(this.email).subscribe({
      next: (res) => { this.user = res; },
      error: (e) => { console.log(e); }
    });
  }
}

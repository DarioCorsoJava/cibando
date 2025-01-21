import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService)
  private routerService = inject(Router);
  errorMessage = '';
  password = '';
  username = '';
  user;

  onSubmit(form) {
    if(form.username !== '' && form.password !== '') {
      this.authService.login(form.username, form.password).subscribe({
        next: (res) => {
          this.user = res;
          if(res) {
            this.authService.saveStorage(res);
            this.routerService.navigateByUrl('/home');
          }
          else {
            this.errorMessage = 'Username/Password errati';
          }
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = 'Spiacenti, si è verificato un errore';
        }
      });
    }
  }
}

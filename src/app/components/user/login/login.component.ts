import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private messageService = inject(MessageService);
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
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Benvenuto in Cibando!' });
            this.routerService.navigateByUrl('/home');
          }
          else {
            this.messageService.add({ severity: 'warning', summary: 'Warning', detail: 'Username/Password errati!' });
            this.errorMessage = 'Username/Password errati';
          }
        },
        error: (e) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Spiacenti, si è verificato un errore!' });
          this.errorMessage = 'Spiacenti, si è verificato un errore';
        }
      });
    }
  }
}

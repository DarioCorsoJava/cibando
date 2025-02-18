import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  private messageService = inject(MessageService);
  private userService = inject(UserService);
  private routerService = inject(Router);
  password: string = '';

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  });

  onPasswordChange(pass: string) {
    this.password = pass;
  }

  onSubmit() {
    console.log(this.form.value);
    const dati = { nome: this.form.controls.name.value,
                   email: this.form.controls.email.value,
                   password: this.form.controls.password.value }
    this.userService.datiUtente.next(dati);
    this.userService.saveUser(dati).subscribe({
      next: (res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registrazione effettuata con successo!' });
        this.routerService.navigateByUrl('home');
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}

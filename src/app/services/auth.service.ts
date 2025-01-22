import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

interface User {
  id?: string,
  name: string,
  email: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiBaseUrl = 'api/users';
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  saveStorage(res) {
    const user: User = {
      id: res._id,
      name: res.name,
      email: res.email,
      role: res.role
    }

    localStorage.setItem('user', JSON.stringify(user));
  }

  login(email: string, password: string) {
    const user = { email: email, password: password }
    return this.http.post(`${this.apiBaseUrl}/login`, user);
  }

  isLogged(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  isAdmin(): boolean {
    return (JSON.parse(localStorage.getItem('user')) !== null && JSON.parse(localStorage.getItem('user')).role === 'admin');
  }

  logout() {
    localStorage.removeItem('user');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiBaseUrl = 'api/users'
  datiUtente = new Subject();
  constructor(private http: HttpClient) { }

  saveUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, JSON.stringify(user));
  }

  getUserByEmail(email): Observable<any> {
    const dati = { email: email }
    return this.http.post(`${this.apiBaseUrl}/user`, dati);
  }
}

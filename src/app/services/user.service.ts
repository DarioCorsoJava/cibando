import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  datiUtente = new Subject();
  constructor() { }
}

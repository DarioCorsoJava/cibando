import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cibando';
  percorso = '../assets/images/carousel-';
  images = [
    {id: 1, label: 'Spaghetti al Pomodoro'},
    {id: 2, label: 'Tagliata di Manzo'},
    {id: 1, label: 'Tiramisù classico'}
  ];
}

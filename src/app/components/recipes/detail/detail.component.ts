import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  //Metodo alternativo di iniezione dei servizi, collegato all'import {Component, inject}
  private recipeService = inject(RecipeService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ricetta: Recipe | undefined;

  ngOnInit(): void {
    this.onGetDetail();
  }

  //Primo metodo di recupero dati dall'URL
  // onGetDetail() {
  //   const id = Number(this.activatedRoute.snapshot.queryParamMap.get('_id'))

  //   if(id) {
  //     //Il subscribe viene fatto sugli Observables
  //     this.recipeService.getDetail(id).subscribe({
  //       next: res => {
  //         this.ricetta = res;
  //       },
  //       error: e => console.log(e)
  //     })
  //   }
  // }

  //Secondo metodo di recupero dati dall'URL, preferibile nel caso ci siano più parametri
  onGetDetail():void {
    this.activatedRoute.params.subscribe(urlParams => {
      const id = Number(urlParams['_id']);
      if(id) {
        this.recipeService.getDetail(id).subscribe(res => this.ricetta = res);
      }
    })
  }
}

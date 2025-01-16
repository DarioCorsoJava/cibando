import { RecipeService } from './../../../services/recipe.service';
import { Component } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';

@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  ricette: Recipe[] = [];
  titoloRicevuto: any;

  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (e) => console.error(e)
    })
  }

  riceviTitolo(event: any) {
    this.titoloRicevuto = event;
  }
}

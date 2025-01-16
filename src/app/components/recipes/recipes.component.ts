import { Component } from '@angular/core';
import { RecipeService } from './../../services/recipe.service';
import { Recipe } from '../../models/recipes.model';

@Component({
  selector: 'app-recipes',
  standalone: false,

  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
}

import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../../../models/recipes.model';
import { RecipeService } from './../../../services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  standalone: false,

  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  routerService = inject(Router);
  recipeService = inject(RecipeService);
  ricetta: Recipe;

  addRecipeForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
  });

  onModalSubmit() {
    this.recipeService.addRecipe(this.addRecipeForm.value);
    this.routerService.navigateByUrl("ricette");
  }
}

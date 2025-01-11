import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipes.mock';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES);
  }

  getDetail(id: Number): Observable<Recipe | undefined> {
    const recipe = RECIPES.find(ricetta => ricetta._id === id);
    return of(recipe);
  }
}

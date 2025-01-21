import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiBaseUrl = 'api/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`);
  }

  getDetail(id: string): Observable<Recipe | undefined> {
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }

  addRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipe);
  }
}

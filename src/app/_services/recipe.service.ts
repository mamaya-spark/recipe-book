import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../_store/models/Recipe';
import { Ingredient } from '../_store/models/Ingredient';
import { Direction } from '../_store/models/Direction';
import { Note } from '../_store/models/Note';
import { RecipeResponseData } from '../_store/models/through/RecipeResponseData';
import { RecipesResponseData } from '../_store/models/through/RecipesResponseData';

@Injectable()
export class RecipeService {

  constructor(
    private _http: HttpClient,
  ) { }

  all(): Observable<RecipesResponseData> {
    return this._http.get(`/api/v1/recipe`);
  }

  allMe(): Observable<RecipesResponseData> {
    return this._http.get(`/api/v1/recipe/me`);
  }

  add(newRecipe: Recipe): Observable<RecipeResponseData> {
    return this._http.post(`/api/v1/recipe`, newRecipe);
  }

  get(recipeId: number): Observable<RecipeResponseData> {
    return this._http.get(`/api/v1/recipe/${recipeId}`);
  }

  update(recipeId: number, updateRecipe: Recipe): Observable<RecipeResponseData> {
    return this._http.put(`/api/v1/recipe/${recipeId}`, updateRecipe);
  }

  addIngredient(recipeId: number, newIngredient: Ingredient): Observable<RecipeResponseData> {
    return this._http.post(`/api/v1/recipe/${recipeId}/ingredient`, newIngredient);
  }

  updateIngredient(recipeId: number, ingredientId: number, updateIngredient: Ingredient): Observable<RecipeResponseData> {
    return this._http.put(`/api/v1/recipe/${recipeId}/ingredient/${ingredientId}`, updateIngredient);
  }

  removeIngredient(recipeId: number, ingredientId: number): Observable<RecipeResponseData> {
    return this._http.delete(`/api/v1/recipe/${recipeId}/ingredient/${ingredientId}`);
  }

  addDirection(recipeId: number, newDirection: Direction): Observable<RecipeResponseData> {
    return this._http.post(`/api/v1/recipe/${recipeId}/direction`, newDirection);
  }

  updateDirection(recipeId: number, directionId: number, updateDirection: Direction): Observable<RecipeResponseData> {
    return this._http.put(`/api/v1/recipe/${recipeId}/direction/${directionId}`, updateDirection);
  }

  removeDirection(recipeId: number, directionId: number): Observable<RecipeResponseData> {
    return this._http.delete(`/api/v1/recipe/${recipeId}/direction/${directionId}`);
  }

  addNote(recipeId: number, newNote: Note): Observable<RecipeResponseData> {
    return this._http.post(`/api/v1/recipe/${recipeId}/note`, newNote);
  }

  updateNote(recipeId: number, noteId: number, updateNote: Note): Observable<RecipeResponseData> {
    return this._http.post(`/api/v1/recipe/${recipeId}/note/${noteId}`, updateNote);
  }

  removeNote(recipeId: number, noteId: number): Observable<RecipeResponseData> {
    return this._http.delete(`/api/v1/recipe/${recipeId}/note/${noteId}`);
  }

}

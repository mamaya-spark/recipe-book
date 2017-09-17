import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {

  constructor(
    private _http: HttpClient,
  ) { }

  all(): Observable<any> {
    return this._http.get(`/api/v1/recipe`);
  }

  allMe(): Observable<any> {
    return this._http.get(`/api/v1/recipe/me`);
  }

  add(postData: any): Observable<any> {
    return this._http.post(`/api/v1/recipe`, postData);
  }

  get(recipeId: number): Observable<any> {
    return this._http.get(`/api/v1/recipe/${recipeId}`);
  }

  update(recipeId: number, putData: any): Observable<any> {
    return this._http.put(`/api/v1/recipe/${recipeId}`, putData);
  }

  addIngredient(recipeId: number, postData: any): Observable<any> {
    return this._http.post(`/api/v1/recipe/${recipeId}/ingredient`, postData);
  }

  updateIngredient(recipeId: number, ingredientId: number, putData: any): Observable<any> {
    return this._http.put(`/api/v1/recipe/${recipeId}/ingredient/${ingredientId}`, putData);
  }

  removeIngredient(recipeId: number, ingredientId: number): Observable<any> {
    return this._http.delete(`/api/v1/recipe/${recipeId}/ingredient/${ingredientId}`);
  }

  addDirection(recipeId: number, postData: any): Observable<any> {
    return this._http.post(`/api/v1/recipe/${recipeId}/direction`, postData);
  }

  updateDirection(recipeId: number, directionId: number, putData: any): Observable<any> {
    return this._http.put(`/api/v1/recipe/${recipeId}/direction/${directionId}`, putData);
  }

  removeDirection(recipeId: number, directionId): Observable<any> {
    return this._http.delete(`/api/v1/recipe/${recipeId}/direction/${directionId}`);
  }

  addNote(recipeId: number, postData: any): Observable<any> {
    return this._http.post(`/api/v1/recipe/${recipeId}/note`, postData);
  }

  updateNote(recipeId: number, noteId: number, putData: any): Observable<any> {
    return this._http.post(`/api/v1/recipe/${recipeId}/note/${noteId}`, putData);
  }

  removeNote(recipeId: number, noteId: number): Observable<any> {
    return this._http.delete(`/api/v1/recipe/${recipeId}/note/${noteId}`);
  }

}

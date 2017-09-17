import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ShoppingIngredient } from '../_store/models/ShoppingIngredient';
import { AddOrRemoveRecipePostData } from '../_store/models/through/AddOrRemoveRecipePostData';
import { ShoppingListResponseData } from '../_store/models/through/ShoppingListResponseData';

@Injectable()
export class ShoppingListService {

  constructor(
    private _http: HttpClient
  ) { }

  get(): Observable<ShoppingListResponseData> {
    return this._http.get(`/api/v1/shopping-list`);
  }

  addIngredient(newIngredient: ShoppingIngredient): Observable<ShoppingListResponseData> {
    return this._http.post(`/api/v1/shopping-list/ingredient`, newIngredient);
  }

  updateIngredient(ingredientId: number, updateIngredient: ShoppingIngredient): Observable<ShoppingListResponseData> {
    return this._http.put(`/api/v1/shopping-list/ingredient/${ingredientId}`, updateIngredient);
  }

  checkoffIngredient(ingredientId: number): Observable<ShoppingListResponseData> {
    return this._http.delete(`/api/v1/shopping-list/ingredient/${ingredientId}`);
  }

  addRecipe(addRecipe: AddOrRemoveRecipePostData): Observable<ShoppingListResponseData> {
    return this._http.post(`/api/v1/shopping-list/ingredients`, addRecipe);
  }

  removeRecipe(removeRecipe: AddOrRemoveRecipePostData): Observable<ShoppingListResponseData> {
    return this._http.delete(`/api/v1/shopping-list/ingredients`, removeRecipe);
  }

}

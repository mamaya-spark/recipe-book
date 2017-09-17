import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingListService {

  constructor(
    private _http: HttpClient
  ) { }

  get(): Observable<any> {
    return this._http.get(`/api/v1/shopping-list`);
  }

  addIngredient(postData: any): Observable<any> {
    return this._http.post(`/api/v1/shopping-list/ingredient`, postData);
  }

  updateIngredient(ingredientId: number, putData: any): Observable<any> {
    return this._http.put(`/api/v1/shopping-list/ingredient/${ingredientId}`, putData);
  }

  removeIngredient(ingredientId: number): Observable<any> {
    return this._http.delete(`/api/v1/shopping-list/ingredient/${ingredientId}`);
  }

  addRecipe(postData: any): Observable<any> {
    return this._http.post(`/api/v1/shopping-list/ingredients`, postData);
  }

  removeRecipe(deleteData: any): Observable<any> {
    return this._http.delete(`/api/v1/shopping-list/ingredients`, deleteData);
  }

}

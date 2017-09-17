import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ShoppingListService } from '../../_services/shopping-list.service';
import {
  GET_SHOPPING_LIST_ACTION,
  GetShoppingListAction,
  GetShoppingListResponseAction,
  GetShoppingListErrorResponseAction,
  ADD_RECIPE_TO_SHOPPING_LIST_ACTION,
  AddRecipeToShoppingListAction,
  AddRecipeToShoppingListResponseAction,
  AddRecipeToShoppingListErrorResponseAction,
  REMOVE_RECIPE_FROM_SHOPPING_LIST_ACTION,
  RemoveRecipeFromShoppingListAction,
  RemoveRecipeFromShoppingListResponseAction,
  RemoveRecipeFromShoppingListErrorResponseAction,
  ADD_INGREDIENT_TO_SHOPPING_LIST_ACTION,
  AddIngredientToShoppingListAction,
  AddIngredientToShoppingListResponseAction,
  AddIngredientToShoppingListErrorResponseAction,
  UPDATE_INGREDIENT_ON_SHOPPING_LIST_ACTION,
  UpdateIngredientOnShoppingListAction,
  UpdateIngredientOnShoppingListResponseAction,
  UpdateIngredientOnShoppingListErrorResponseAction,
  CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ACTION,
  CheckoffIngredientFromShoppingListAction,
  CheckoffIngredientFromShoppingListResponseAction,
  CheckoffIngredientFromShoppingListErrorResponseAction,
} from '../actions/shopping-list.actions';

import { ShoppingListResponseData } from '../models/through/ShoppingListResponseData';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffectService {
  constructor(
    private actions$: Actions,
    private _shoppingList: ShoppingListService,
  ){ }

  @Effect() shoppingList$: Observable<Action> = this.actions$
    .ofType(GET_SHOPPING_LIST_ACTION)
    .map((action: GetShoppingListAction) => action.payload)
    .mergeMap(payload =>
      this._shoppingList
        .get()
        .map((res: ShoppingListResponseData) => new GetShoppingListResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new GetShoppingListErrorResponseAction(err)))
    );

  @Effect() newShoppingIngredient$: Observable<Action> = this.actions$
    .ofType(ADD_INGREDIENT_TO_SHOPPING_LIST_ACTION)
    .map((action: AddIngredientToShoppingListAction) => action.payload)
    .mergeMap(payload =>
      this._shoppingList
        .addIngredient(payload.newIngredient)
        .map((res: ShoppingListResponseData) => new AddIngredientToShoppingListResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new AddIngredientToShoppingListErrorResponseAction(err)))
    );

  @Effect() updateShoppingIngredient$: Observable<Action> = this.actions$
    .ofType(UPDATE_INGREDIENT_ON_SHOPPING_LIST_ACTION)
    .map((action: UpdateIngredientOnShoppingListAction) => action.payload)
    .mergeMap(payload =>
      this._shoppingList
        .updateIngredient(payload.ingredientId, payload.updateIngredient)
        .map((res: ShoppingListResponseData) => new UpdateIngredientOnShoppingListResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new UpdateIngredientOnShoppingListErrorResponseAction(err)))
    );

  @Effect() checkoffShoppingIngredient$: Observable<Action> = this.actions$
    .ofType(CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ACTION)
    .map((action: CheckoffIngredientFromShoppingListAction) => action.payload)
    .mergeMap(payload =>
      this._shoppingList
        .checkoffIngredient(payload.ingredientId)
        .map((res: ShoppingListResponseData) => new CheckoffIngredientFromShoppingListResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new CheckoffIngredientFromShoppingListErrorResponseAction(err)))
    );

  @Effect() newRecipe$: Observable<Action> = this.actions$
    .ofType(ADD_RECIPE_TO_SHOPPING_LIST_ACTION)
    .map((action: AddRecipeToShoppingListAction) => action.payload)
    .mergeMap(payload =>
      this._shoppingList
        .addRecipe(payload.addRecipe)
        .map((res: ShoppingListResponseData) => new AddRecipeToShoppingListResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new AddRecipeToShoppingListErrorResponseAction(err)))
    );

  @Effect() removeRecipe$: Observable<Action> = this.actions$
    .ofType(REMOVE_RECIPE_FROM_SHOPPING_LIST_ACTION)
    .map((action: RemoveRecipeFromShoppingListAction) => action.payload)
    .mergeMap(payload =>
      this._shoppingList
        .removeRecipe(payload.removeRecipe)
        .map((res: ShoppingListResponseData) => new RemoveRecipeFromShoppingListResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new RemoveRecipeFromShoppingListErrorResponseAction(err)))
    );
}

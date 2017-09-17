import { Action } from '@ngrx/store';

import { AddRecipePayload } from '../models/through/AddRecipePayload';
import { RemoveRecipePayload } from '../models/through/RemoveRecipePayload';
import { NewShoppingIngredientPayload } from '../models/through/NewShoppingIngredientPayload';
import { UpdateShoppingIngredientPayload } from '../models/through/UpdateShoppingIngredientPayload';
import { CheckoffShoppingIngredientPayload } from '../models/through/CheckoffShoppingIngredientPayload';

import { ShoppingListResponseData } from '../models/through/ShoppingListResponseData';
import { HttpErrorResponse } from '@angular/common/http';

export const GET_SHOPPING_LIST_ACTION = 'GET_SHOPPING_LIST_ACTION';
export const GET_SHOPPING_LIST_RESPONSE_ACTION = 'GET_SHOPPING_LIST_RESPONSE_ACTION';
export const GET_SHOPPING_LIST_ERROR_RESPONSE_ACTION = 'GET_SHOPPING_LIST_ERROR_RESPONSE_ACTION';

export class GetShoppingListAction implements Action {
  readonly type = GET_SHOPPING_LIST_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetShoppingListResponseAction implements Action {
  readonly type = GET_SHOPPING_LIST_RESPONSE_ACTION;

  constructor(
    public payload: ShoppingListResponseData
  ){ }
}

export class GetShoppingListErrorResponseAction implements Action {
  readonly type = GET_SHOPPING_LIST_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const ADD_RECIPE_TO_SHOPPING_LIST_ACTION = 'ADD_RECIPE_TO_SHOPPING_LIST_ACTION';
export const ADD_RECIPE_TO_SHOPPING_LIST_RESPONSE_ACTION = 'ADD_RECIPE_TO_SHOPPING_LIST_RESPONSE_ACTION';
export const ADD_RECIPE_TO_SHOPPING_LIST_ERROR_RESPONSE_ACTION = 'ADD_RECIPE_TO_SHOPPING_LIST_ERROR_RESPONSE_ACTION';

export class AddRecipeToShoppingListAction implements Action {
  readonly type = ADD_RECIPE_TO_SHOPPING_LIST_ACTION;

  constructor(
    public payload: AddRecipePayload
  ){ }
}

export class AddRecipeToShoppingListResponseAction implements Action {
  readonly type = ADD_RECIPE_TO_SHOPPING_LIST_RESPONSE_ACTION;

  constructor(
    public payload: ShoppingListResponseData
  ){ }
}

export class AddRecipeToShoppingListErrorResponseAction implements Action {
  readonly type = ADD_RECIPE_TO_SHOPPING_LIST_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const REMOVE_RECIPE_FROM_SHOPPING_LIST_ACTION = 'REMOVE_RECIPE_FROM_SHOPPING_LIST_ACTION';
export const REMOVE_RECIPE_FROM_SHOPPING_LIST_RESPONSE_ACTION = 'REMOVE_RECIPE_FROM_SHOPPING_LIST_RESPONSE_ACTION';
export const REMOVE_RECIPE_FROM_SHOPPING_LIST_ERROR_RESPONSE_ACTION = 'REMOVE_RECIPE_FROM_SHOPPING_LIST_ERROR_RESPONSE_ACTION';

export class RemoveRecipeFromShoppingListAction implements Action {
  readonly type = REMOVE_RECIPE_FROM_SHOPPING_LIST_ACTION;

  constructor(
    public payload: RemoveRecipePayload
  ){ }
}

export class RemoveRecipeFromShoppingListResponseAction implements Action {
  readonly type = REMOVE_RECIPE_FROM_SHOPPING_LIST_RESPONSE_ACTION;

  constructor(
    public payload: ShoppingListResponseData
  ){ }
}

export class RemoveRecipeFromShoppingListErrorResponseAction implements Action {
  readonly type = REMOVE_RECIPE_FROM_SHOPPING_LIST_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const ADD_INGREDIENT_TO_SHOPPING_LIST_ACTION = 'ADD_INGREDIENT_TO_SHOPPING_LIST_ACTION';
export const ADD_INGREDIENT_TO_SHOPPING_LIST_RESPONSE_ACTION = 'ADD_INGREDIENT_TO_SHOPPING_LIST_RESPONSE_ACTION';
export const ADD_INGREDIENT_TO_SHOPPING_LIST_ERROR_RESPONSE_ACTION = 'ADD_INGREDIENT_TO_SHOPPING_LIST_ERROR_RESPONSE_ACTION';

export class AddIngredientToShoppingListAction implements Action {
  readonly type = ADD_INGREDIENT_TO_SHOPPING_LIST_ACTION;

  constructor(
    public payload: NewShoppingIngredientPayload
  ){ }
}

export class AddIngredientToShoppingListResponseAction implements Action {
  readonly type = ADD_INGREDIENT_TO_SHOPPING_LIST_RESPONSE_ACTION;

  constructor(
    public payload: ShoppingListResponseData
  ){ }
}

export class AddIngredientToShoppingListErrorResponseAction implements Action {
  readonly type = ADD_INGREDIENT_TO_SHOPPING_LIST_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const UPDATE_INGREDIENT_ON_SHOPPING_LIST_ACTION = 'UPDATE_INGREDIENT_ON_SHOPPING_LIST_ACTION';
export const UPDATE_INGREDIENT_ON_SHOPPING_LIST_RESPONSE_ACTION = 'UPDATE_INGREDIENT_ON_SHOPPING_LIST_RESPONSE_ACTION';
export const UPDATE_INGREDIENT_ON_SHOPPING_LIST_ERROR_RESPONSE_ACTION = 'UPDATE_INGREDIENT_ON_SHOPPING_LIST_ERROR_RESPONSE_ACTION';

export class UpdateIngredientOnShoppingListAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_SHOPPING_LIST_ACTION;

  constructor(
    public payload: UpdateShoppingIngredientPayload
  ){ }
}

export class UpdateIngredientOnShoppingListResponseAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_SHOPPING_LIST_RESPONSE_ACTION;

  constructor(
    public payload: ShoppingListResponseData
  ){ }
}

export class UpdateIngredientOnShoppingListErrorResponseAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_SHOPPING_LIST_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ACTION = 'CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ACTION';
export const CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_RESPONSE_ACTION = 'CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_RESPONSE_ACTION';
export const CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ERROR_RESPONSE_ACTION = 'CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ERROR_RESPONSE_ACTION';

export class CheckoffIngredientFromShoppingListAction implements Action {
  readonly type = CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ACTION;

  constructor(
    public payload: CheckoffShoppingIngredientPayload
  ){ }
}

export class CheckoffIngredientFromShoppingListResponseAction implements Action {
  readonly type = CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_RESPONSE_ACTION;

  constructor(
    public payload: ShoppingListResponseData
  ){ }
}

export class CheckoffIngredientFromShoppingListErrorResponseAction implements Action {
  readonly type = CHECKOFF_INGREDIENT_FROM_SHOPPING_LIST_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

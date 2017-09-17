import { Action } from '@ngrx/store';

import { SortRecipesPayload } from '../models/through/SortRecipesPayload';
import { SearchRecipesPayload } from '../models/through/SearchRecipesPayload';
import { NewRecipePayload } from '../models/through/NewRecipePayload';
import { GetRecipePayload } from '../models/through/GetRecipePayload';
import { UpdateRecipePayload } from '../models/through/UpdateRecipePayload';
import { NewIngredientPayload } from '../models/through/NewIngredientPayload';
import { UpdateIngredientPayload } from '../models/through/UpdateIngredientPayload';
import { RemoveIngredientPayload } from '../models/through/RemoveIngredientPayload';
import { NewDirectionPayload } from '../models/through/NewDirectionPayload';
import { UpdateDirectionPayload } from '../models/through/UpdateDirectionPayload';
import { RemoveDirectionPayload } from '../models/through/RemoveDirectionPayload';
import { NewNotePayload } from '../models/through/NewNotePayload';
import { UpdateNotePayload } from '../models/through/UpdateNotePayload';
import { RemoveNotePayload } from '../models/through/RemoveNotePayload';

import { RecipeResponseData } from '../models/through/RecipeResponseData';
import { RecipesResponseData } from '../models/through/RecipesResponseData';
import { HttpErrorResponse } from '@angular/common/http';

export const SORT_RECIPES_ACTION = 'SORT_RECIPES_ACTION';
export const SEARCH_RECIPES_ACTION = 'SEARCH_RECIPES_ACTION';
export const SORT_MY_RECIPES_ACTION = 'SORT_MY_RECIPES_ACTION';
export const SEARCH_MY_RECIPES_ACTION = 'SEARCH_MY_RECIPES_ACTION';
export const SELECT_RECIPE_ACTION = 'SELECT_RECIPE_ACTION';

export class SortRecipesAction implements Action {
  readonly type = SORT_RECIPES_ACTION;

  constructor(
    public payload: SortRecipesPayload
  ){ }
}

export class SearchRecipesAction implements Action {
  readonly type = SEARCH_RECIPES_ACTION;

  constructor(
    public payload: SearchRecipesPayload
  ){ }
}

export class SortMyRecipesAction implements Action {
  readonly type = SORT_MY_RECIPES_ACTION;

  constructor(
    public payload: SortRecipesPayload
  ){ }
}

export class SearchMyRecipesAction implements Action {
  readonly type = SEARCH_MY_RECIPES_ACTION;

  constructor(
    public payload: SearchRecipesPayload
  ){ }
}

export class SelectRecipeAction implements Action {
  readonly type = SELECT_RECIPE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export const GET_ALL_RECIPES_ACTION = 'GET_ALL_RECIPES_ACTION';
export const GET_ALL_RECIPES_RESPONSE_ACTION = 'GET_ALL_RECIPES_RESPONSE_ACTION';
export const GET_ALL_RECIPES_ERROR_RESPONSE_ACTION = 'GET_ALL_RECIPES_ERROR_RESPONSE_ACTION';

export class GetAllRecipesAction implements Action {
  readonly type = GET_ALL_RECIPES_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetAllRecipesResponseAction implements Action {
  readonly type = GET_ALL_RECIPES_RESPONSE_ACTION;

  constructor(
    public payload: RecipesResponseData
  ){ }
}

export class GetAllRecipesErrorResponseAction implements Action {
  readonly type = GET_ALL_RECIPES_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const GET_MY_RECIPES_ACTION = 'GET_MY_RECIPES_ACTION';
export const GET_MY_RECIPES_RESPONSE_ACTION = 'GET_MY_RECIPES_RESPONSE_ACTION';
export const GET_MY_RECIPES_ERROR_RESPONSE_ACTION = 'GET_MY_RECIPES_ERROR_RESPONSE_ACTION';

export class GetMyRecipesAction implements Action {
  readonly type = GET_MY_RECIPES_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetMyRecipesResponseAction implements Action {
  readonly type = GET_MY_RECIPES_RESPONSE_ACTION;

  constructor(
    public payload: RecipesResponseData
  ){ }
}

export class GetMyRecipesErrorResponseAction implements Action {
  readonly type = GET_MY_RECIPES_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const CREATE_RECIPE_ACTION = 'CREATE_RECIPE_ACTION';
export const CREATE_RECIPE_RESPONSE_ACTION = 'CREATE_RECIPE_RESPONSE_ACTION';
export const CREATE_RECIPE_ERROR_RESPONSE_ACTION = 'CREATE_RECIPE_ERROR_RESPONSE_ACTION';

export class CreateRecipeAction implements Action {
  readonly type = CREATE_RECIPE_ACTION;

  constructor(
    public payload: NewRecipePayload
  ){ }
}

export class CreateRecipeResponseAction implements Action {
  readonly type = CREATE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class CreateRecipeErrorResponseAction implements Action {
  readonly type = CREATE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const GET_RECIPE_ACTION = 'GET_RECIPE_ACTION';
export const GET_RECIPE_RESPONSE_ACTION = 'GET_RECIPE_RESPONSE_ACTION';
export const GET_RECIPE_ERROR_RESPONSE_ACTION = 'GET_RECIPE_ERROR_RESPONSE_ACTION';

export class GetRecipeAction implements Action {
  readonly type = GET_RECIPE_ACTION;

  constructor(
    public payload: GetRecipePayload
  ){ }
}

export class GetRecipeResponseAction implements Action {
  readonly type = GET_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class GetRecipeErrorResponseAction implements Action {
  readonly type = GET_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const UPDATE_RECIPE_ACTION = 'UPDATE_RECIPE_ACTION';
export const UPDATE_RECIPE_RESPONSE_ACTION = 'UPDATE_RECIPE_RESPONSE_ACTION';
export const UPDATE_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateRecipeAction implements Action {
  readonly type = UPDATE_RECIPE_ACTION;

  constructor(
    public payload: UpdateRecipePayload
  ){ }
}

export class UpdateRecipeResponseAction implements Action {
  readonly type = UPDATE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class UpdateRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const SAVE_RECIPE_ACTION = 'SAVE_RECIPE_ACTION';
export const SAVE_RECIPE_RESPONSE_ACTION = 'SAVE_RECIPE_RESPONSE_ACTION';
export const SAVE_RECIPE_ERROR_RESPONSE_ACTION = 'SAVE_RECIPE_ERROR_RESPONSE_ACTION';

export class SaveRecipeAction implements Action {
  readonly type = SAVE_RECIPE_ACTION;

  constructor(
    public payload: UpdateRecipePayload
  ){ }
}

export class SaveRecipeResponseAction implements Action {
  readonly type = SAVE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class SaveRecipeErrorResponseAction implements Action {
  readonly type = SAVE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const UNSAVE_RECIPE_ACTION = 'UNSAVE_RECIPE_ACTION';
export const UNSAVE_RECIPE_RESPONSE_ACTION = 'UNSAVE_RECIPE_RESPONSE_ACTION';
export const UNSAVE_RECIPE_ERROR_RESPONSE_ACTION = 'UNSAVE_RECIPE_ERROR_RESPONSE_ACTION';

export class UnsaveRecipeAction implements Action {
  readonly type = UNSAVE_RECIPE_ACTION;

  constructor(
    public payload: UpdateRecipePayload
  ){ }
}

export class UnsaveRecipeResponseAction implements Action {
  readonly type = UNSAVE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class UnsaveRecipeErrorResponseAction implements Action {
  readonly type = UNSAVE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const ADD_INGREDIENT_TO_RECIPE_ACTION = 'ADD_INGREDIENT_TO_RECIPE_ACTION';
export const ADD_INGREDIENT_TO_RECIPE_RESPONSE_ACTION = 'ADD_INGREDIENT_TO_RECIPE_RESPONSE_ACTION';
export const ADD_INGREDIENT_TO_RECIPE_ERROR_RESPONSE_ACTION = 'ADD_INGREDIENT_TO_RECIPE_ERROR_RESPONSE_ACTION';

export class AddIngredientToRecipeAction implements Action {
  readonly type = ADD_INGREDIENT_TO_RECIPE_ACTION;

  constructor(
    public payload: NewIngredientPayload
  ){ }
}

export class AddIngredientToRecipeResponseAction implements Action {
  readonly type = ADD_INGREDIENT_TO_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class AddIngredientToRecipeErrorResponseAction implements Action {
  readonly type = ADD_INGREDIENT_TO_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const UPDATE_INGREDIENT_ON_RECIPE_ACTION = 'UPDATE_INGREDIENT_ON_RECIPE_ACTION';
export const UPDATE_INGREDIENT_ON_RECIPE_RESPONSE_ACTION = 'UPDATE_INGREDIENT_ON_RECIPE_RESPONSE_ACTION';
export const UPDATE_INGREDIENT_ON_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_INGREDIENT_ON_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateIngredientOnRecipeAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_RECIPE_ACTION;

  constructor(
    public payload: UpdateIngredientPayload
  ){ }
}

export class UpdateIngredientOnRecipeResponseAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class UpdateIngredientOnRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const REMOVE_INGREDIENT_FROM_RECIPE_ACTION = 'REMOVE_INGREDIENT_FROM_RECIPE_ACTION';
export const REMOVE_INGREDIENT_FROM_RECIPE_RESPONSE_ACTION = 'REMOVE_INGREDIENT_FROM_RECIPE_RESPONSE_ACTION';
export const REMOVE_INGREDIENT_FROM_RECIPE_ERROR_RESPONSE_ACTION = 'REMOVE_INGREDIENT_FROM_RECIPE_ERROR_RESPONSE_ACTION';

export class RemoveIngredientFromRecipeAction implements Action {
  readonly type = REMOVE_INGREDIENT_FROM_RECIPE_ACTION;

  constructor(
    public payload: RemoveIngredientPayload
  ){ }
}

export class RemoveIngredientFromRecipeResponseAction implements Action {
  readonly type = REMOVE_INGREDIENT_FROM_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class RemoveIngredientFromRecipeErrorResponseAction implements Action {
  readonly type = REMOVE_INGREDIENT_FROM_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const ADD_DIRECTION_TO_RECIPE_ACTION = 'ADD_DIRECTION_TO_RECIPE_ACTION';
export const ADD_DIRECTION_TO_RECIPE_RESPONSE_ACTION = 'ADD_DIRECTION_TO_RECIPE_RESPONSE_ACTION';
export const ADD_DIRECTION_TO_RECIPE_ERROR_RESPONSE_ACTION = 'ADD_DIRECTION_TO_RECIPE_ERROR_RESPONSE_ACTION';

export class AddDirectionToRecipeAction implements Action {
  readonly type = ADD_DIRECTION_TO_RECIPE_ACTION;

  constructor(
    public payload: NewDirectionPayload
  ){ }
}

export class AddDirectionToRecipeResponseAction implements Action {
  readonly type = ADD_DIRECTION_TO_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class AddDirectionToRecipeErrorResponseAction implements Action {
  readonly type = ADD_DIRECTION_TO_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const UPDATE_DIRECTION_ON_RECIPE_ACTION = 'UPDATE_DIRECTION_ON_RECIPE_ACTION';
export const UPDATE_DIRECTION_ON_RECIPE_RESPONSE_ACTION = 'UPDATE_DIRECTION_ON_RECIPE_RESPONSE_ACTION';
export const UPDATE_DIRECTION_ON_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_DIRECTION_ON_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateDirectionOnRecipeAction implements Action {
  readonly type = UPDATE_DIRECTION_ON_RECIPE_ACTION;

  constructor(
    public payload: UpdateDirectionPayload
  ){ }
}

export class UpdateDirectionOnRecipeResponseAction implements Action {
  readonly type = UPDATE_DIRECTION_ON_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class UpdateDirectionOnRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_DIRECTION_ON_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const REMOVE_DIRECTION_FROM_RECIPE_ACTION = 'REMOVE_DIRECTION_FROM_RECIPE_ACTION';
export const REMOVE_DIRECTION_FROM_RECIPE_RESPONSE_ACTION = 'REMOVE_DIRECTION_FROM_RECIPE_RESPONSE_ACTION';
export const REMOVE_DIRECTION_FROM_RECIPE_ERROR_RESPONSE_ACTION = 'REMOVE_DIRECTION_FROM_RECIPE_ERROR_RESPONSE_ACTION';

export class RemoveDirectionFromRecipeAction implements Action {
  readonly type = REMOVE_DIRECTION_FROM_RECIPE_ACTION;

  constructor(
    public payload: RemoveDirectionPayload
  ){ }
}

export class RemoveDirectionFromRecipeResponseAction implements Action {
  readonly type = REMOVE_DIRECTION_FROM_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class RemoveDirectionFromRecipeErrorResponseAction implements Action {
  readonly type = REMOVE_DIRECTION_FROM_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const ADD_NOTE_TO_RECIPE_ACTION = 'ADD_NOTE_TO_RECIPE_ACTION';
export const ADD_NOTE_TO_RECIPE_RESPONSE_ACTION = 'ADD_NOTE_TO_RECIPE_RESPONSE_ACTION';
export const ADD_NOTE_TO_RECIPE_ERROR_RESPONSE_ACTION = 'ADD_NOTE_TO_RECIPE_ERROR_RESPONSE_ACTION';

export class AddNoteToRecipeAction implements Action {
  readonly type = ADD_NOTE_TO_RECIPE_ACTION;

  constructor(
    public payload: NewNotePayload
  ){ }
}

export class AddNoteToRecipeResponseAction implements Action {
  readonly type = ADD_NOTE_TO_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class AddNoteToRecipeErrorResponseAction implements Action {
  readonly type = ADD_NOTE_TO_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const UPDATE_NOTE_ON_RECIPE_ACTION = 'UPDATE_NOTE_ON_RECIPE_ACTION';
export const UPDATE_NOTE_ON_RECIPE_RESPONSE_ACTION = 'UPDATE_NOTE_ON_RECIPE_RESPONSE_ACTION';
export const UPDATE_NOTE_ON_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_NOTE_ON_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateNoteOnRecipeAction implements Action {
  readonly type = UPDATE_NOTE_ON_RECIPE_ACTION;

  constructor(
    public payload: UpdateNotePayload
  ){ }
}

export class UpdateNoteOnRecipeResponseAction implements Action {
  readonly type = UPDATE_NOTE_ON_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class UpdateNoteOnRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_NOTE_ON_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

export const REMOVE_NOTE_FROM_RECIPE_ACTION = 'REMOVE_NOTE_FROM_RECIPE_ACTION';
export const REMOVE_NOTE_FROM_RECIPE_RESPONSE_ACTION = 'REMOVE_NOTE_FROM_RECIPE_RESPONSE_ACTION';
export const REMOVE_NOTE_FROM_RECIPE_ERROR_RESPONSE_ACTION = 'REMOVE_NOTE_FROM_RECIPE_ERROR_RESPONSE_ACTION';

export class RemoveNoteFromRecipeAction implements Action {
  readonly type = REMOVE_NOTE_FROM_RECIPE_ACTION;

  constructor(
    public payload: RemoveNotePayload
  ){ }
}

export class RemoveNoteFromRecipeResponseAction implements Action {
  readonly type = REMOVE_NOTE_FROM_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload: RecipeResponseData
  ){ }
}

export class RemoveNoteFromRecipeErrorResponseAction implements Action {
  readonly type = REMOVE_NOTE_FROM_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload: HttpErrorResponse
  ){ }
}

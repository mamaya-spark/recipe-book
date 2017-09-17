import { Action } from '@ngrx/store';

export const SORT_RECIPES_ACTION = 'SORT_RECIPES_ACTION';
export const SEARCH_RECIPES_ACTION = 'SEARCH_RECIPES_ACTION';
export const SORT_MY_RECIPES_ACTION = 'SORT_MY_RECIPES_ACTION';
export const SEARCH_MY_RECIPES_ACTION = 'SEARCH_MY_RECIPES_ACTION';
export const SELECT_RECIPE_ACTION = 'SELECT_RECIPE_ACTION';

export class SortRecipesAction implements Action {
  readonly type = SORT_RECIPES_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class SearchRecipesAction implements Action {
  readonly type = SEARCH_RECIPES_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class SortMyRecipesAction implements Action {
  readonly type = SORT_MY_RECIPES_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class SearchMyRecipesAction implements Action {
  readonly type = SEARCH_MY_RECIPES_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class SelectRecipeAction implements Action {
  readonly type = SELECT_RECIPE_ACTION;

  constructor(
    public payload?: any
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
    public payload?: any
  ){ }
}

export class GetAllRecipesErrorResponseAction implements Action {
  readonly type = GET_ALL_RECIPES_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
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
    public payload?: any
  ){ }
}

export class GetMyRecipesErrorResponseAction implements Action {
  readonly type = GET_MY_RECIPES_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const CREATE_RECIPE_ACTION = 'CREATE_RECIPE_ACTION';
export const CREATE_RECIPE_RESPONSE_ACTION = 'CREATE_RECIPE_RESPONSE_ACTION';
export const CREATE_RECIPE_ERROR_RESPONSE_ACTION = 'CREATE_RECIPE_ERROR_RESPONSE_ACTION';

export class CreateRecipeAction implements Action {
  readonly type = CREATE_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class CreateRecipeResponseAction implements Action {
  readonly type = CREATE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class CreateRecipeErrorResponseAction implements Action {
  readonly type = CREATE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const GET_RECIPE_ACTION = 'GET_RECIPE_ACTION';
export const GET_RECIPE_RESPONSE_ACTION = 'GET_RECIPE_RESPONSE_ACTION';
export const GET_RECIPE_ERROR_RESPONSE_ACTION = 'GET_RECIPE_ERROR_RESPONSE_ACTION';

export class GetRecipeAction implements Action {
  readonly type = GET_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetRecipeResponseAction implements Action {
  readonly type = GET_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class GetRecipeErrorResponseAction implements Action {
  readonly type = GET_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const UPDATE_RECIPE_ACTION = 'UPDATE_RECIPE_ACTION';
export const UPDATE_RECIPE_RESPONSE_ACTION = 'UPDATE_RECIPE_RESPONSE_ACTION';
export const UPDATE_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateRecipeAction implements Action {
  readonly type = UPDATE_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateRecipeResponseAction implements Action {
  readonly type = UPDATE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const SAVE_RECIPE_ACTION = 'SAVE_RECIPE_ACTION';
export const SAVE_RECIPE_RESPONSE_ACTION = 'SAVE_RECIPE_RESPONSE_ACTION';
export const SAVE_RECIPE_ERROR_RESPONSE_ACTION = 'SAVE_RECIPE_ERROR_RESPONSE_ACTION';

export class SaveRecipeAction implements Action {
  readonly type = SAVE_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class SaveRecipeResponseAction implements Action {
  readonly type = SAVE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class SaveRecipeErrorResponseAction implements Action {
  readonly type = SAVE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const UNSAVE_RECIPE_ACTION = 'UNSAVE_RECIPE_ACTION';
export const UNSAVE_RECIPE_RESPONSE_ACTION = 'UNSAVE_RECIPE_RESPONSE_ACTION';
export const UNSAVE_RECIPE_ERROR_RESPONSE_ACTION = 'UNSAVE_RECIPE_ERROR_RESPONSE_ACTION';

export class UnsaveRecipeAction implements Action {
  readonly type = UNSAVE_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UnsaveRecipeResponseAction implements Action {
  readonly type = UNSAVE_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UnsaveRecipeErrorResponseAction implements Action {
  readonly type = UNSAVE_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const ADD_INGREDIENT_TO_RECIPE_ACTION = 'ADD_INGREDIENT_TO_RECIPE_ACTION';
export const ADD_INGREDIENT_TO_RECIPE_RESPONSE_ACTION = 'ADD_INGREDIENT_TO_RECIPE_RESPONSE_ACTION';
export const ADD_INGREDIENT_TO_RECIPE_ERROR_RESPONSE_ACTION = 'ADD_INGREDIENT_TO_RECIPE_ERROR_RESPONSE_ACTION';

export class AddIngredientToRecipeAction implements Action {
  readonly type = ADD_INGREDIENT_TO_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class AddIngredientToRecipeResponseAction implements Action {
  readonly type = ADD_INGREDIENT_TO_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class AddIngredientToRecipeErrorResponseAction implements Action {
  readonly type = ADD_INGREDIENT_TO_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const UPDATE_INGREDIENT_ON_RECIPE_ACTION = 'UPDATE_INGREDIENT_ON_RECIPE_ACTION';
export const UPDATE_INGREDIENT_ON_RECIPE_RESPONSE_ACTION = 'UPDATE_INGREDIENT_ON_RECIPE_RESPONSE_ACTION';
export const UPDATE_INGREDIENT_ON_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_INGREDIENT_ON_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateIngredientOnRecipeAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateIngredientOnRecipeResponseAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateIngredientOnRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_INGREDIENT_ON_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const REMOVE_INGREDIENT_FROM_RECIPE_ACTION = 'REMOVE_INGREDIENT_FROM_RECIPE_ACTION';
export const REMOVE_INGREDIENT_FROM_RECIPE_RESPONSE_ACTION = 'REMOVE_INGREDIENT_FROM_RECIPE_RESPONSE_ACTION';
export const REMOVE_INGREDIENT_FROM_RECIPE_ERROR_RESPONSE_ACTION = 'REMOVE_INGREDIENT_FROM_RECIPE_ERROR_RESPONSE_ACTION';

export class RemoveIngredientFromRecipeAction implements Action {
  readonly type = REMOVE_INGREDIENT_FROM_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class RemoveIngredientFromRecipeResponseAction implements Action {
  readonly type = REMOVE_INGREDIENT_FROM_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class RemoveIngredientFromRecipeErrorResponseAction implements Action {
  readonly type = REMOVE_INGREDIENT_FROM_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const ADD_DIRECTION_TO_RECIPE_ACTION = 'ADD_DIRECTION_TO_RECIPE_ACTION';
export const ADD_DIRECTION_TO_RECIPE_RESPONSE_ACTION = 'ADD_DIRECTION_TO_RECIPE_RESPONSE_ACTION';
export const ADD_DIRECTION_TO_RECIPE_ERROR_RESPONSE_ACTION = 'ADD_DIRECTION_TO_RECIPE_ERROR_RESPONSE_ACTION';

export class AddDirectionToRecipeAction implements Action {
  readonly type = ADD_DIRECTION_TO_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class AddDirectionToRecipeResponseAction implements Action {
  readonly type = ADD_DIRECTION_TO_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class AddDirectionToRecipeErrorResponseAction implements Action {
  readonly type = ADD_DIRECTION_TO_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const UPDATE_DIRECTION_ON_RECIPE_ACTION = 'UPDATE_DIRECTION_ON_RECIPE_ACTION';
export const UPDATE_DIRECTION_ON_RECIPE_RESPONSE_ACTION = 'UPDATE_DIRECTION_ON_RECIPE_RESPONSE_ACTION';
export const UPDATE_DIRECTION_ON_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_DIRECTION_ON_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateDirectionOnRecipeAction implements Action {
  readonly type = UPDATE_DIRECTION_ON_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateDirectionOnRecipeResponseAction implements Action {
  readonly type = UPDATE_DIRECTION_ON_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateDirectionOnRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_DIRECTION_ON_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const REMOVE_DIRECTION_FROM_RECIPE_ACTION = 'REMOVE_DIRECTION_FROM_RECIPE_ACTION';
export const REMOVE_DIRECTION_FROM_RECIPE_RESPONSE_ACTION = 'REMOVE_DIRECTION_FROM_RECIPE_RESPONSE_ACTION';
export const REMOVE_DIRECTION_FROM_RECIPE_ERROR_RESPONSE_ACTION = 'REMOVE_DIRECTION_FROM_RECIPE_ERROR_RESPONSE_ACTION';

export class RemoveDirectionFromRecipeAction implements Action {
  readonly type = REMOVE_DIRECTION_FROM_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class RemoveDirectionFromRecipeResponseAction implements Action {
  readonly type = REMOVE_DIRECTION_FROM_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class RemoveDirectionFromRecipeErrorResponseAction implements Action {
  readonly type = REMOVE_DIRECTION_FROM_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const ADD_NOTE_TO_RECIPE_ACTION = 'ADD_NOTE_TO_RECIPE_ACTION';
export const ADD_NOTE_TO_RECIPE_RESPONSE_ACTION = 'ADD_NOTE_TO_RECIPE_RESPONSE_ACTION';
export const ADD_NOTE_TO_RECIPE_ERROR_RESPONSE_ACTION = 'ADD_NOTE_TO_RECIPE_ERROR_RESPONSE_ACTION';

export class AddNoteToRecipeAction implements Action {
  readonly type = ADD_NOTE_TO_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class AddNoteToRecipeResponseAction implements Action {
  readonly type = ADD_NOTE_TO_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class AddNoteToRecipeErrorResponseAction implements Action {
  readonly type = ADD_NOTE_TO_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const UPDATE_NOTE_ON_RECIPE_ACTION = 'UPDATE_NOTE_ON_RECIPE_ACTION';
export const UPDATE_NOTE_ON_RECIPE_RESPONSE_ACTION = 'UPDATE_NOTE_ON_RECIPE_RESPONSE_ACTION';
export const UPDATE_NOTE_ON_RECIPE_ERROR_RESPONSE_ACTION = 'UPDATE_NOTE_ON_RECIPE_ERROR_RESPONSE_ACTION';

export class UpdateNoteOnRecipeAction implements Action {
  readonly type = UPDATE_NOTE_ON_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateNoteOnRecipeResponseAction implements Action {
  readonly type = UPDATE_NOTE_ON_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class UpdateNoteOnRecipeErrorResponseAction implements Action {
  readonly type = UPDATE_NOTE_ON_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export const REMOVE_NOTE_FROM_RECIPE_ACTION = 'REMOVE_NOTE_FROM_RECIPE_ACTION';
export const REMOVE_NOTE_FROM_RECIPE_RESPONSE_ACTION = 'REMOVE_NOTE_FROM_RECIPE_RESPONSE_ACTION';
export const REMOVE_NOTE_FROM_RECIPE_ERROR_RESPONSE_ACTION = 'REMOVE_NOTE_FROM_RECIPE_ERROR_RESPONSE_ACTION';

export class RemoveNoteFromRecipeAction implements Action {
  readonly type = REMOVE_NOTE_FROM_RECIPE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class RemoveNoteFromRecipeResponseAction implements Action {
  readonly type = REMOVE_NOTE_FROM_RECIPE_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

export class RemoveNoteFromRecipeErrorResponseAction implements Action {
  readonly type = REMOVE_NOTE_FROM_RECIPE_ERROR_RESPONSE_ACTION;

  constructor(
    public payload?: any
  ){ }
}

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { RecipeService } from '../../_services/recipe.service';
import {
  GET_ALL_RECIPES_ACTION,
  GetAllRecipesAction,
  GetAllRecipesResponseAction,
  GetAllRecipesErrorResponseAction,
  GET_MY_RECIPES_ACTION,
  GetMyRecipesAction,
  GetMyRecipesResponseAction,
  GetMyRecipesErrorResponseAction,
  CREATE_RECIPE_ACTION,
  CreateRecipeAction,
  CreateRecipeResponseAction,
  CreateRecipeErrorResponseAction,
  GET_RECIPE_ACTION,
  GetRecipeAction,
  GetRecipeResponseAction,
  GetRecipeErrorResponseAction,
  UPDATE_RECIPE_ACTION,
  UpdateRecipeAction,
  UpdateRecipeResponseAction,
  UpdateRecipeErrorResponseAction,
  SAVE_RECIPE_ACTION,
  SaveRecipeAction,
  SaveRecipeResponseAction,
  SaveRecipeErrorResponseAction,
  UNSAVE_RECIPE_ACTION,
  UnsaveRecipeAction,
  UnsaveRecipeResponseAction,
  UnsaveRecipeErrorResponseAction,
  ADD_INGREDIENT_TO_RECIPE_ACTION,
  AddIngredientToRecipeAction,
  AddIngredientToRecipeResponseAction,
  AddIngredientToRecipeErrorResponseAction,
  UPDATE_INGREDIENT_ON_RECIPE_ACTION,
  UpdateIngredientOnRecipeAction,
  UpdateIngredientOnRecipeResponseAction,
  UpdateIngredientOnRecipeErrorResponseAction,
  REMOVE_INGREDIENT_FROM_RECIPE_ACTION,
  RemoveIngredientFromRecipeAction,
  RemoveIngredientFromRecipeResponseAction,
  RemoveIngredientFromRecipeErrorResponseAction,
  ADD_DIRECTION_TO_RECIPE_ACTION,
  AddDirectionToRecipeAction,
  AddDirectionToRecipeResponseAction,
  AddDirectionToRecipeErrorResponseAction,
  UPDATE_DIRECTION_ON_RECIPE_ACTION,
  UpdateDirectionOnRecipeAction,
  UpdateDirectionOnRecipeResponseAction,
  UpdateDirectionOnRecipeErrorResponseAction,
  REMOVE_DIRECTION_FROM_RECIPE_ACTION,
  RemoveDirectionFromRecipeAction,
  RemoveDirectionFromRecipeResponseAction,
  RemoveDirectionFromRecipeErrorResponseAction,
  ADD_NOTE_TO_RECIPE_ACTION,
  AddNoteToRecipeAction,
  AddNoteToRecipeResponseAction,
  AddNoteToRecipeErrorResponseAction,
  UPDATE_NOTE_ON_RECIPE_ACTION,
  UpdateNoteOnRecipeAction,
  UpdateNoteOnRecipeResponseAction,
  UpdateNoteOnRecipeErrorResponseAction,
  REMOVE_NOTE_FROM_RECIPE_ACTION,
  RemoveNoteFromRecipeAction,
  RemoveNoteFromRecipeResponseAction,
  RemoveNoteFromRecipeErrorResponseAction,
} from '../actions/recipe.actions';

import { RecipeResponseData } from '../models/through/RecipeResponseData';
import { RecipesResponseData } from '../models/through/RecipesResponseData';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthEffectService {
  constructor(
    private actions$: Actions,
    private _recipe: RecipeService,
  ){ }

  @Effect() allRecipes$: Observable<Action> = this.actions$
    .ofType(GET_ALL_RECIPES_ACTION)
    .map((action: GetAllRecipesAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .all()
        .map((res: RecipesResponseData) => new GetAllRecipesResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new GetAllRecipesErrorResponseAction(err)))
    );

  @Effect() myRecipes$: Observable<Action> = this.actions$
    .ofType(GET_MY_RECIPES_ACTION)
    .map((action: GetMyRecipesAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .allMe()
        .map((res: RecipesResponseData) => new GetMyRecipesResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new GetMyRecipesErrorResponseAction(err)))
    );

  @Effect() newRecipe$: Observable<Action> = this.actions$
    .ofType(CREATE_RECIPE_ACTION)
    .map((action: CreateRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .add(payload.newRecipe)
        .map((res: RecipeResponseData) => new CreateRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new CreateRecipeErrorResponseAction(err)))
    );

  @Effect() recipe$: Observable<Action> = this.actions$
    .ofType(GET_RECIPE_ACTION)
    .map((action: GetRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .get(payload.recipeId)
        .map((res: RecipeResponseData) => new GetRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new GetRecipeErrorResponseAction(err)))
    );

  @Effect() updateRecipe$: Observable<Action> = this.actions$
    .ofType(UPDATE_RECIPE_ACTION)
    .map((action: UpdateRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .update(payload.recipeId, payload.updateRecipe)
        .map((res: RecipeResponseData) => new UpdateRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new UpdateRecipeErrorResponseAction(err)))
    );

  @Effect() newIngredient$: Observable<Action> = this.actions$
    .ofType(ADD_INGREDIENT_TO_RECIPE_ACTION)
    .map((action: AddIngredientToRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .addIngredient(payload.recipeId, payload.newIngredient)
        .map((res: RecipeResponseData) => new AddIngredientToRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new AddIngredientToRecipeErrorResponseAction(err)))
    );

  @Effect() updateIngredient$: Observable<Action> = this.actions$
    .ofType(UPDATE_INGREDIENT_ON_RECIPE_ACTION)
    .map((action: UpdateIngredientOnRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .updateIngredient(payload.recipeId, payload.ingredientId, payload.updateIngredient)
        .map((res: RecipeResponseData) => new UpdateIngredientOnRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new UpdateIngredientOnRecipeErrorResponseAction(err)))
    );

  @Effect() removeIngredient$: Observable<Action> = this.actions$
    .ofType(REMOVE_INGREDIENT_FROM_RECIPE_ACTION)
    .map((action: RemoveIngredientFromRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .removeIngredient(payload.recipeId, payload.ingredientId)
        .map((res: RecipeResponseData) => new RemoveIngredientFromRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new RemoveIngredientFromRecipeErrorResponseAction(err)))
    );

  @Effect() newDirection$: Observable<Action> = this.actions$
    .ofType(ADD_DIRECTION_TO_RECIPE_ACTION)
    .map((action: AddDirectionToRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .addDirection(payload.recipeId, payload.newDirection)
        .map((res: RecipeResponseData) => new AddDirectionToRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new AddDirectionToRecipeErrorResponseAction(err)))
    );

  @Effect() updateDirection$: Observable<Action> = this.actions$
    .ofType(UPDATE_DIRECTION_ON_RECIPE_ACTION)
    .map((action: UpdateDirectionOnRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .updateDirection(payload.recipeId, payload.directionId, payload.updateDirection)
        .map((res: RecipeResponseData) => new UpdateDirectionOnRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new UpdateDirectionOnRecipeErrorResponseAction(err)))
    );

  @Effect() removeDirection$: Observable<Action> = this.actions$
    .ofType(REMOVE_DIRECTION_FROM_RECIPE_ACTION)
    .map((action: RemoveDirectionFromRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .removeDirection(payload.recipeId, payload.directionId)
        .map((res: RecipeResponseData) => new RemoveDirectionFromRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new RemoveDirectionFromRecipeErrorResponseAction(err)))
    );

  @Effect() newNote$: Observable<Action> = this.actions$
    .ofType(ADD_NOTE_TO_RECIPE_ACTION)
    .map((action: AddNoteToRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .addNote(payload.recipeId, payload.newNote)
        .map((res: RecipeResponseData) => new AddNoteToRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new AddNoteToRecipeErrorResponseAction(err)))
    );

  @Effect() updateNote$: Observable<Action> = this.actions$
    .ofType(UPDATE_NOTE_ON_RECIPE_ACTION)
    .map((action: UpdateNoteOnRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .updateNote(payload.recipeId, payload.noteId, payload.updateNote)
        .map((res: RecipeResponseData) => new UpdateNoteOnRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new UpdateNoteOnRecipeErrorResponseAction(err)))
    );

  @Effect() removeNote$: Observable<Action> = this.actions$
    .ofType(REMOVE_NOTE_FROM_RECIPE_ACTION)
    .map((action: RemoveNoteFromRecipeAction) => action.payload)
    .mergeMap(payload =>
      this._recipe
        .removeNote(payload.recipeId, payload.noteId)
        .map((res: RecipeResponseData) => new RemoveNoteFromRecipeResponseAction(res))
        .catch((err: HttpErrorResponse) => of(new RemoveNoteFromRecipeErrorResponseAction(err)))
    );
}

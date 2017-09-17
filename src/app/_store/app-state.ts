import { RouterReducerState } from '@ngrx/router-store';
import { User } from './models/User';
import { Recipe } from './models/Recipe';
import { ShoppingList } from './models/ShoppingList';

export interface ApplicationState {
  store: StoreReducerState;
  router: RouterReducerState;
}

export interface StoreReducerState {
  data: {
    me: User;
    recipes: Recipe[];
    my_recipes: Recipe[];
    shopping_list: ShoppingList;
  },
  state: {
    loggedIn: boolean;
    recipes: Recipe[];
    my_recipes: Recipe[];
    current_shopping_list: ShoppingList;
    current_recipe: Recipe;
    new_recipe: Recipe;
  }
}

export const INITIAL_STORE_REDUCER_STATE: StoreReducerState = {
  data: {
    me: undefined,
    recipes: [ ],
    my_recipes: [ ],
    shopping_list: undefined,
  },
  state: {
    loggedIn: false,
    recipes: [ ],
    my_recipes: [ ],
    current_shopping_list: undefined,
    current_recipe: undefined,
    new_recipe: undefined,
  }
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  store: INITIAL_STORE_REDUCER_STATE,
  router: undefined,
}

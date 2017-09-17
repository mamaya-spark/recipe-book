import { Ingredient } from '../Ingredient';

export interface NewIngredientPayload {
  recipeId: number;
  newIngredient: Ingredient;
}

import { Ingredient } from '../Ingredient';

export interface UpdateIngredientPayload {
  recipeId: number;
  ingredientId: number;
  updateIngredient: Ingredient;
}

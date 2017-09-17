import { Recipe } from '../Recipe';

export interface UpdateRecipePayload {
  recipeId: number;
  updateRecipe: Recipe;
}

import { ShoppingIngredient } from '../ShoppingIngredient';

export interface UpdateShoppingIngredientPayload {
  ingredientId: number;
  updateIngredient: ShoppingIngredient;
}

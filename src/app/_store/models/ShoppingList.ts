import { ShoppingIngredient } from './ShoppingIngredient';

export interface ShoppingList {
  id: number;
  user_id: number;
  ingredients: ShoppingIngredient[];
  created_at: string;
  updated_at: string;
}

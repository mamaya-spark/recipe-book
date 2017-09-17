export interface ShoppingIngredient {
  id: number;
  recipe_id: number;
  shopping_list_id: number;
  amount: string;
  name: string;
  checked: boolean;
}

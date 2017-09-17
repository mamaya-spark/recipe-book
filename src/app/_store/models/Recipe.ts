import { Cuisine } from './Cuisine';
import { Ingredient } from './Ingredient';
import { Direction } from './Direction';
import { Note } from './Note';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  cuisine: Cuisine;
  calories: number;
  servings: number;
  time: string;
  ingredients: Ingredient[];
  directions: Direction[];
  notes: Note[];
  saved: boolean;
  created_at: string;
  updated_at: string;
  user_id: number;
}

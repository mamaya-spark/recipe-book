import { Direction } from '../Direction';

export interface NewDirectionPayload {
  recipeId: number;
  newDirection: Direction;
}

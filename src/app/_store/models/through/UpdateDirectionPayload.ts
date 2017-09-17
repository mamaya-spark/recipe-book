import { Direction } from '../Direction';

export interface UpdateDirectionPayload {
  recipeId: number;
  directionId: number;
  updateDirection: Direction;
}

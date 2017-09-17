import { Note } from '../Note';

export interface NewNotePayload {
  recipeId: number;
  newNote: Note;
}

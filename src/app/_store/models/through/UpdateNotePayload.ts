import { Note } from '../Note';

export interface UpdateNotePayload {
  recipeId: number;
  noteId: number;
  updateNote: Note;
}

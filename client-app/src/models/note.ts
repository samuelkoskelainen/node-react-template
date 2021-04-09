export interface NoteForm {
  title: string;
  description: string;
  date: Date;
}

export interface Note {
  _id: string;
  title: string;
  description: string;
  date: Date;
}
import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Note, NoteForm } from '../models/note';

export default class NoteStore {
  notes: Note[] = [];
  loading = false;
  postLoading = false;
  deleteMessage: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  loadNotes = async () => {
    this.setLoading(true);
    try {
      const notes = await agent.Notes.list();
      runInAction(() => {
        this.notes = notes;
      })
      this.setLoading(false);
    } catch (error) {
      console.log(error);
      this.setLoading(false);
    }
  };

  postNote = async (title: string, description: string) => {
    this.setPostLoading(true);
    const note: NoteForm = {
      title,
      description,
      date: new Date()
    }
    console.log(note)
    try {
      const noteQuery = await agent.Notes.create(note)
      runInAction(() => {
        this.notes.push(noteQuery.newNote)
      })
      this.setPostLoading(false);
    } catch(error) {
      console.log(error)
      this.setPostLoading(false);
    }
  };

  updateNote = async (newNote: Note) => {
    try {
      const noteQuery = await agent.Notes.update(newNote)
      console.log(noteQuery.newNote)
    } catch(error) {
      console.log(error)
    }
  }

  deleteNote = async (id: string) => {
    try {
      const noteQuery = await agent.Notes.delete(id)
      runInAction(() => {
        this.notes = this.notes.filter(note => {
          return note._id !== id;
        })
        this.deleteMessage = noteQuery.message
      })
    } catch(error) {
      console.log(error)
    }
  }

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  setPostLoading = (state: boolean) => {
    this.postLoading = state;
  };
}

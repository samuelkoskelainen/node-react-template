const Note = require('../models/note');

const listNotes = (req, res) => {
  Note.find({}).then((notes) => {
    res.status(200).send(notes);
  });
};

const createNote = (req, res) => {
  const { note } = req.body;
  console.log(req.body);

  const newNote = new Note(note);

  newNote.save().then((success) => {
    if (success) {
      res.status(201).send({ message: 'note created', newNote: newNote });
    } else {
      res.status(500).send({ message: 'could not create note' });
    }
  });
};

const updateNote = (req, res) => {
  const { note } = req.body;
  const { _id, title, description } = note;

  Note.updateOne({ _id }, { $set: { title, description } }).then((success) => {
    if (success) {
      res.status(204).send({ message: 'note updated succesfully' });
    } else {
      res.status(500).send({ message: 'could not update note' });
    }
  });
};

const deleteNote = (req, res) => {
  const { id } = req.query;
  console.log(req.query);

  Note.deleteOne({ id }).then((success) => {
    if (success) {
      res.status(204).send({ message: 'note deleted succesfully' });
    } else {
      res.status(500).send({ message: 'could not delete note' });
    }
  });
};

module.exports = {
  listNotes,
  createNote,
  updateNote,
  deleteNote,
};

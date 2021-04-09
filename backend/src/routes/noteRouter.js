const express = require('express');
const noteController = require('../controllers/noteController');

const noteRouter = express.Router();

noteRouter.route('/list').get(noteController.listNotes);
noteRouter.route('/create').post(noteController.createNote);
noteRouter.route('/delete/:id').delete(noteController.deleteNote);
noteRouter.route('/update/:id').put(noteController.updateNote);

module.exports = noteRouter;

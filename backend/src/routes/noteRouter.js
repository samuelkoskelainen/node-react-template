const express = require('express');
const noteController = require('../controllers/noteController');

const noteRouter = express.Router();

noteRouter.route('/list').get(noteController.listNotes);

module.exports = noteRouter;

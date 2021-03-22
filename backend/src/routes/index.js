const express = require('express');
const noteRouter = require('./noteRouter');

const router = express.Router();

router.use('/note', noteRouter);

module.exports = router;

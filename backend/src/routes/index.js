const express = require('express');
const noteRouter = require('./noteRouter');
const authRouter = require('./authRouter');
const auth = require('../middleware/auth');

const router = express.Router();

router.use('/notes', auth, noteRouter);
router.use('/auth', authRouter);

module.exports = router;

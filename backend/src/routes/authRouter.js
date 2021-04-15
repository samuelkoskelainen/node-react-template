const express = require('express');
const { register, login } = require('../controllers/authController');
const auth = require('../middleware/auth');

const authRouter = express.Router();

authRouter.route('/register').post(register);
authRouter.route('/login').post(login);

module.exports = authRouter;

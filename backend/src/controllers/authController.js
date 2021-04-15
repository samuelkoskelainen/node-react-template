const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
    });
    user
      .save()
      .then(() => {
        res.status(201).json({
          message: 'user added succesfully!',
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  });
};

const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: new Error('user not found!'),
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: new Error('incorrect email or password!'),
            });
          }
          const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN, {
            expiresIn: '24h',
          });
          res.status(200).json({
            user,
            token,
          });
        })
        .catch((error) => {
          res.status(500).json({
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
};

module.exports.register = register;
module.exports.login = login;

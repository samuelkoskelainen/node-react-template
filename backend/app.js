require('dotenv').config();
const path = require('path');
const express = require('express');
const apiRouter = require('./src/routes/index');
const mongoose = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT | 5000;

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '..', 'client-app', 'build')));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client-app', 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: 5000`));

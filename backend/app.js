require('dotenv').config();
require('./config/database');
const path = require('path');
const cors = require('cors');
const express = require('express');
const apiRouter = require('./src/routes/index');

const app = express();

if (process.env.NODE_ENV === 'development') {
  console.log('server in development-mode');
  app.use(cors());
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: 5000`));

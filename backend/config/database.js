const mongoose = require('mongoose');

const url = process.env.MONGO_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB: connected succesfully');
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB: error: ' + error.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB: disconnected');
});

module.exports = mongoose;

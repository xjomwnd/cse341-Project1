const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dbConnection = require('./db/connect');
const app = express();

// Import dotenv and configure it to read .env file
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoConnectionString = `mongodb://localhost:27017/joemongo?authSource=admin&w=1`;

mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: mongoUsername,
  pass: encodeURIComponent(mongoPassword),
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Use the database connection
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Mount the routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
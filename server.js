const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dbConnection = require('./db/connect');
const app = express();
// Import dotenv and configure it to read .env file
require('dotenv').config();
// Now you can access environment variables using process.env
const PORT = process.env.PORT || 8080;
// Connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoConnectionString = `mongodb://${joemongo}:${encodeURIComponent(7Mwathani77)}@localhost:27017/cse341-project1`;

MongoClient.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(client => {
    console.log('Connected to MongoDB');
    // You can store the client and use it later
    // e.g., client.db().collection('users').find(...) 
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
// Use the database connection
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Mount the routes
app.use('/', routes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

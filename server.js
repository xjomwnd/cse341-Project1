const express = require('express');
const routes = require('./routes');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// Import dotenv and configure it to read .env file
require('dotenv').config();

// Now you can access environment variables using process.env
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
const mongoUsername = 'joemongo';
const mongoPassword = '7Mwathani77';
const mongoConnectionString = `mongodb://${mongoUsername}:${encodeURIComponent(mongoPassword)}@localhost:27017/cse341-project1`;

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

// Mount the routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
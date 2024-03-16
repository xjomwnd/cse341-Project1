const express = require('express');
const routes = require('./routes');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// Import dotenv and configure it to read .env file
require('dotenv').config();

const PORT = process.env.PORT || 8080;

// MongoDB connection details
const mongoUsername = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoConnectionString = 'mongodb://localhost:27017/joemongo?authSource=admin&w=1';

// Connect to MongoDB
MongoClient.connect(mongoConnectionString, {
  auth: {
    user: mongoUsername,
    password: mongoPassword
  },
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
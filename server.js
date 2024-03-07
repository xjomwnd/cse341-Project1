const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dbConnection = require('./db/connect');

const app = express();

// Import dotenv and configure it to read .env file
require('dotenv').config();
// Now you can access environment variables using process.env

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/contact-api')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Use the database connection
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define utils here
require('./utils/db');
// Mount the routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

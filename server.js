const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dbConnection = require('./db/connect');

const app = express();

// Import dotenv and configure it to read .env file
require('dotenv').config();

// Use the database connection
dbConnection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
    // Optionally attempt to reconnect
    // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

dbConnection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Mount the routes
app.use('/', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

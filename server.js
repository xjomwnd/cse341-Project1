const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

// Import dotenv and configure it to read .env file
require('dotenv').config();

// Define the port, using the environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Mount the routes
app.use('/', routes);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

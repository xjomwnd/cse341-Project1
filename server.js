const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');

const app = express();

// Connect to MongoDB using the configuration from config.js
mongoose.connect(config.database.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        
        // Start the Express server after successfully connecting to MongoDB
        app.listen(config.server.port, () => {
            console.log(`Server is running on port ${config.server.port}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
        // Exit the process if unable to connect to MongoDB
        process.exit(1);
    });

// Mount the routes
app.use('/', routes);

module.exports = app; // Export the app for testing or further usage

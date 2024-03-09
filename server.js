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
        process.exit(1); // Exit the process if unable to connect to MongoDB
    });

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for handling CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

// Mount the routes
app.use('/', routes);

module.exports = app; // Export the app for testing or further usage

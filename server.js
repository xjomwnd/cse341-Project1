const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config'); // Import the config.js file

const app = express();

// Connect to MongoDB using the configuration from config.js
mongoose.connect(config.database.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Mount the routes
app.use('/', routes);

// Start the Express server using the configured port from config.js
app.listen(config.server.port, () => {
    console.log(`Server is running on port ${config.server.port}`);
});

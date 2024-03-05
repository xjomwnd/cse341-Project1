// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/contact-api', {
    useFindAndModify: false, // to suppress deprecation warnings for findAndModify
    useCreateIndex: true // to suppress deprecation warnings for ensureIndex
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Define routes
app.use('/api/contacts', require('./routes/contacts'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

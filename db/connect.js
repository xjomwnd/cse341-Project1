// db/connect.js

const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURI = 'mongodb://localhost/contact-api';

// Connect to MongoDB
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Export the mongoose connection
module.exports = mongoose.connection;

const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURI = 'mongodb://localhost/contact-api';

// Function to establish MongoDB connection
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

// Call the function to connect to MongoDB
connectToMongoDB();

// Export the mongoose connection
module.exports = mongoose.connection;

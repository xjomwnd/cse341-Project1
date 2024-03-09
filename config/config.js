// config.js
module.exports = {
    // Database configuration
    database: {
        // MongoDB connection string
        mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase',
    },
    // Server configuration
    server: {
        // Port number for the server
        port: process.env.PORT || 8080,
    },
    // Other configuration settings...
};

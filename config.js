// config.js
module.exports = {
    // Database configuration
    database: {
        // MongoDB connection string
        mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mongodb://"Joemongo":"7Mwathani77"@localhost:27017/cse341-project1',
    },
    // Server configuration
    server: {
        // Port number for the server
        port: process.env.PORT || 8080,
    },
    // Other configuration settings...
};

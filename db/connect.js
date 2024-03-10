const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURI = 'mongodb://localhost/contact-api';

// Call the function to connect to MongoDB
connectToMongoDB();

// Export the mongoose connection
module.exports = mongoose.connection;
//
const encodedPassword = encodeURIComponent('7Mwathani77');
const databaseUrl = process.env.DATABASE_URL.replace('${encodedPassword}', encodedPassword);

mongoose.connect(databaseUrl, {
  // Any additional options for mongoose.connect()
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Failed to connect to MongoDB', err));
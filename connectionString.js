const mongodb = require('mongodb');

// Replace <password> with your actual password and <database> with your actual database name
const connectionString = 'mongodb+srv://Joemongo:7Mwathani77@cluster0.urkbujj.mongodb.net';

mongodb.MongoClient.connect(connectionString, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB');
    // Perform operations with the client object
});

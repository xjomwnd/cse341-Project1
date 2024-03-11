// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
// Create the Express app
const app = express();
app.use(bodyParser.json());
// MongoDB connection string
const connectionString = 'mongodb://joemongo:7Mwathani77@your-mongodb-host:27017/';
// Connect to MongoDB
mongodb.MongoClient.connect(connectionString, (err, client) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    return;
  }
  const db = client.db('your-database-name');
  const collection = db.collection('your-collection-name');
  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  // Define your API routes here
  app.get('/api/data', (req, res) => {
    collection.find({}).toArray((err, data) => {
      if (err) {
        console.error('Failed to fetch data from MongoDB', err);
        res.status(500).json({ error: 'Failed to fetch data' });
        return;
      }
      res.json(data);
    });
  });
  // Add more routes as needed
});


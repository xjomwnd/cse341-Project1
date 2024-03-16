// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const Contact = require('./models/contact'); // Correct import statement
const mongoose = require('mongoose');

// Create the Express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection string (for Mongoose)
mongoose.connect('mongodb+srv://Joemongo:7Mwathani77@cluster0.urkbujj.mongodb.net')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define your API routes here
// Example route to fetch data from MongoDB using Mongoose
app.get('/api/data', async (req, res) => {
  try {
    const data = await Contact.find(); // Use the Contact model instead of YourModel
    res.json(data);
  } catch (err) {
    console.error('Failed to fetch data from MongoDB', err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Add more routes as needed

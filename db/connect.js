const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const dbUrl = process.env.DATABASE_URL;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  monitorCommands: true,
};

const mongoClientOptions = {
  monitorCommands: true,
  auth: {
    username: 'Joemongo',
    password: '7Mwathani77',
  },
};

mongoose.connect(dbUrl, dbOptions);

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB connected');
});

connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server or perform other operations after successful MongoDB connection
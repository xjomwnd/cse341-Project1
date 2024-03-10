const mongoose = require('mongoose');
const MongodbUri = require('mongodb-uri');

const dbUrl = process.env.DATABASE_URL;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  monitorCommands: true,
};

const mongodbUri = new MongodbUri(dbUrl);
const encodedPassword = mongodbUri.encode('Joemongo:7Mwathani77@');

const connectionString = `mongodb://${encodedPassword}${mongodbUri.hostname}:${mongodbUri.port}/${mongodbUri.database}`;

mongoose.connect(connectionString, dbOptions);

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB connected');
});

connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server or perform other operations after successful MongoDB connection
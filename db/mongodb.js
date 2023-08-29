// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('your-database-name'); // Replace with your database name
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

module.exports = connectDB;

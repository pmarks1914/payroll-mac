// pages/api/user.js
// const c onnectDB = require('../../path-to-db.js'); // Adjust the path

export default function handler(req, res) {

  // const db = await connectDB();
  // const collection = db.collection('users');

  // // Perform MongoDB operations using the 'collection' object
  // const users = await collection.find({}).toArray();

  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ message: 'This is a GET request' });
  } else if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'This is a POST request', secret: process.env.REACT_APP_API_KEY });
  } else if (req.method === 'DELETE') {
    // Handle POST request
    res.status(200).json({ message: 'This is a POST request' });
  } else {
    // Handle other methods
    res.status(405).end();
  }
}

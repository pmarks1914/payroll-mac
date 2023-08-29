// pages/api/user.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      // Handle GET request
      res.status(200).json({ message: 'This is a GET request' });
    } else if (req.method === 'POST') {
      // Handle POST request
      res.status(200).json({ message: 'This is a POST request' });
    } else {
      // Handle other methods
      res.status(405).end();
    }
  }
  
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 3000;
const mongoURL = process.env.MONGO_URL || 'mongodb://mongo:27017/mydb';

mongoose.connect(mongoURL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js + MongoDB using Docker Compose!');
});

app.listen(port, () => console.log(`🚀 App running on port ${port}`));

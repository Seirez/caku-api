const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./api/routes');
require('dotenv').config();

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your MongoDB schema and model here

// Define your API routes here

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


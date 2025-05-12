// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();  // Import environment variables (for API key)

const app = express();
const PORT = 5000;

// Middleware to handle cross-origin requests and parse JSON data
app.use(cors());
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server and log to console
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

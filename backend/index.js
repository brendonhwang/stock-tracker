require('dotenv').config();  // Load environment variables
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
console.log("DEBUG: API Key is", API_KEY);

app.use(cors());
app.use(express.json());

// Stock API Route
app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await axios.get(
      'https://www.alphavantage.co/query',
      {
        params: {
          function: 'GLOBAL_QUOTE',
          symbol: symbol,
          apikey: API_KEY,
        }
      }
    );

    // Send only the actual quote object
    res.json(response.data['Global Quote']);
    
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

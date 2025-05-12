const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
console.log("DEBUG: API Key is", API_KEY);

router.get('/:symbol', async (req, res) => {
  const symbol = req.params.symbol;

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query`,
      {
        params: {
            function: 'TIME_SERIES_INTRADAY',
            symbol: symbol,
            interval: '5min',
            apikey: API_KEY, // ✅ Must pass this
        }

      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

module.exports = router;

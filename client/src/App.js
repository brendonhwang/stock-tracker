import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import StockCard from './components/StockCard';

function App() {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch stock data based on ticker
  const handleSearch = async (ticker) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`http://localhost:5000/api/stock/${ticker}`);
      setStockData(response.data);
    } catch (err) {
      setError('Failed to fetch stock data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Stock Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {stockData && <StockCard data={stockData} />}
    </div>
  );
}

export default App;

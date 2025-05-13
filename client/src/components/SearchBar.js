import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [ticker, setTicker] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticker.trim() !== '') {
      onSearch(ticker.toUpperCase());
      setTicker('');
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., AAPL)"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [ticker, setTicker] = useState('');

  const handleChange = (e) => {
    setTicker(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticker.trim()) {
      onSearch(ticker);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ticker}
          onChange={handleChange}
          placeholder="Enter stock ticker"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;

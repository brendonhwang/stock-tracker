import React from 'react';
import './StockCard.css';

function StockCard({ data }) {
  return (
    <div className="stock-card">
      <h2>{data['01. symbol']}</h2>
      <div className="stock-details">
        <p><strong>Open:</strong> {parseFloat(data['02. open']).toFixed(2)}</p>
        <p><strong>High:</strong> {parseFloat(data['03. high']).toFixed(2)}</p>
        <p><strong>Low:</strong> {parseFloat(data['04. low']).toFixed(2)}</p>
        <p><strong>Price:</strong> {parseFloat(data['05. price']).toFixed(2)}</p>
        <p><strong>Volume:</strong> {parseInt(data['06. volume']).toLocaleString()}</p>
        <p><strong>Latest Trading Day:</strong> {data['07. latest trading day']}</p>
        <p><strong>Previous Close:</strong> {parseFloat(data['08. previous close']).toFixed(2)}</p>
        <p><strong>Change:</strong> {parseFloat(data['09. change']).toFixed(2)}</p>
        <p><strong>Change Percent:</strong> {parseFloat(data['10. change percent']).toFixed(2)}%</p>

      </div>
    </div>
  );
}

export default StockCard;

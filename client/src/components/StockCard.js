import React from 'react';

function StockCard({ data }) {
  return (
    <div className="stock-card">
      <h2>{data['01. symbol']}</h2>
      <p><strong>Open:</strong> {data['02. open']}</p>
      <p><strong>High:</strong> {data['03. high']}</p>
      <p><strong>Low:</strong> {data['04. low']}</p>
      <p><strong>Price:</strong> {data['05. price']}</p>
      <p><strong>Volume:</strong> {data['06. volume']}</p>
      <p><strong>Latest Trading Day:</strong> {data['07. latest trading day']}</p>
      <p><strong>Previous Close:</strong> {data['08. previous close']}</p>
      <p><strong>Change:</strong> {data['09. change']}</p>
      <p><strong>Change Percent:</strong> {data['10. change percent']}</p>
    </div>
  );
}

export default StockCard;

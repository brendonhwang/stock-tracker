# Stock Tracker App

## Description

A web application that allows users to search for real-time stock information using the Alpha Vantage API. The application fetches stock data and displays details like price, volume, high, low, and more.

## Features

- Search for stock data by ticker symbol (e.g., AAPL for Apple).
- Display key stock information:
  - Open price
  - High price
  - Low price
  - Current price
  - Volume
  - Previous close
  - Change in price
  - Change percentage
- Backend server (Node.js and Express) to handle stock data requests.
- Frontend built with React.js for a smooth user interface.

## Technologies Used

- **Frontend:**
  - React
  - Axios (for making HTTP requests)

- **Backend:**
  - Node.js
  - Express
  - Axios (for making HTTP requests to Alpha Vantage API)
  - dotenv (for environment variables)
  - cors (for enabling Cross-Origin Resource Sharing)

- **API:**
  - Alpha Vantage API (for fetching real-time stock data)

- **Backend Setup:**

- Navigate to the backend directory (if you have one, or just the project root if it's a full-stack repo).
- Install dependencies: npm install
- Create a .env file in the root and add your API key: ALPHA_VANTAGE_API_KEY=your_api_key_here
- Start the backend server: npm start

- **Frontend Setup:**

- Navigate to the client directory (or wherever your React app is).
- Install dependencies: npm install
- Start the frontend app: npm start
- The app should now be accessible at http://localhost:3000.

- **Usage**
- Enter a stock symbol (e.g., AAPL) in the search bar and click "Search".
- The app will display real-time stock information from the Alpha Vantage API.
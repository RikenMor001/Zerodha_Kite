import React, { useEffect, useState } from 'react';

interface StockData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  lastUpdated: string;
}

const WebSocketStockData: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/stocks');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStockData(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setError('Failed to fetch stock data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading && stockData.length === 0) {
    return <div className="text-white">Loading stock data...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-neutral-800 p-4 rounded-xl shadow-md">
      <h2 className="text-white text-xl font-semibold mb-4">Live Stock Data</h2>
      <div className="space-y-2">
        {stockData.map((stock) => (
          <div 
            key={stock.symbol}
            className="flex justify-between items-center p-2 bg-neutral-700 rounded-lg"
          >
            <div className="flex-1">
              <span className="text-white font-medium">{stock.name}</span>
              <span className="text-neutral-400 text-sm ml-2">({stock.symbol})</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white">₹{stock.price}</span>
              <span className={`${parseFloat(stock.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change} ({stock.changePercent})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketStockData; 

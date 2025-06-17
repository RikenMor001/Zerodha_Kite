import { useEffect, useState } from "react"

// stockPrice, symbol, name, percentageChange, lastUpdated, change

interface stockData{
  stockPrice: string;
  symbol: string;
  name: string;
  percentageChange: string;
  lastUpdated: string;
  change: string;
}

const WebSocketData: React.FC = () => {
  const [stockData, setStockData] = useState<stockData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | number | null>();

  // It has to be an async function because there is a request 
  // being sent to the backend route. 

  useEffect(() => {
    try {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('/api/stock');      
      if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setStockData(data);
      setError(null);
    }
    } catch(error){
      console.error('Error fetching datta' + error);
      setError("Failed to fetch data. Please try again later!");
    } finally {
      setLoading(false)
    }
  }, [])

  return <div>

  </div>
}

export default WebSocketData;

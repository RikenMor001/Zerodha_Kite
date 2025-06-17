
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
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('api/stock');
        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        setStockData(data);
        setError(null);

      } catch(error){
          console.error("Fetch request failed");
          setError("Failed to fetch data. Please try again later!")
      } finally{
        setLoading(false)
      }
    }

    fetchData();
    // Hit the api route from the frontend and fetch data every 3 seconds
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, [])

  
    if (loading && stockData.length === 0){
      return <div className="text-slate-400 font-semibold">
        Loading stock data...
      </div>  
    }

    if (error){   
      return <div className="text-red-500 font-semibold">
        {error}
      </div>
    }

  return <div>
  </div>
}

export default WebSocketData;

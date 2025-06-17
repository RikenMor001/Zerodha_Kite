
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
  const [errors, setErrors] = useState<string | number | null>();

  // It has to be an async function because there is a request 
  // being sent to the backend route. 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
    }
  }, [])

  return <div>

  </div>
}

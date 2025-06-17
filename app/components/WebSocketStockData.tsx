
import { useState } from "react"

// stockPrice, symbol, name, percentageChange, lastUpdated, change

interface stockData{

}

const WebSocketData: React.FC = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | number | null>();

  return <div>

  </div>
}
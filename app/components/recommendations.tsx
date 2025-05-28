
"use client"

import { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export default function Recommendations() {
  const [ selectedStock, setSelectedStock ] = useState<string | null>(null);
  
  const stocks: StockData[] = [
    { 
        symbol: "INDIA VIX", 
        price: 12.45, 
        change: 0.45, 
        changePercent: 3.75 
    },
    { 
        symbol: "NIFTY 50", 
        price: 22456.80, 
        change: -123.45, 
        changePercent: -0.55 
    },
    { 
        symbol: "HDFCBANK", 
        price: 1467.85, 
        change: 23.45, 
        changePercent: 1.62 
    },
    { 
        symbol: "ICICIBANK", 
        price: 1023.50, 
        change: -15.30, 
        changePercent: -1.47 
    },
    { 
        symbol: "KOTAKBANK", 
        price: 1789.65, 
        change: 45.20, 
        changePercent: 2.59 
    },
    { 
        symbol: "AXISBANK", 
        price: 987.30, 
        change: 12.40, 
        changePercent: 1.27 
    },
    { 
        symbol: "SBIN", 
        price: 645.75, 
        change: -8.25, 
        changePercent: -1.26 
    }
  ];

  return (
    <div className="text-white font-semibold text-xs mt-5">
      {stocks.map((stock) => (
        <div
          key={stock.symbol}
          className={`mb-2 rounded-md border border-neutral-800 hover:border-neutral-700 shadow-lg w-[90%] p-3 transition-all duration-200 ${
            selectedStock === stock.symbol ? 'bg-neutral-800' : ''
          }`}
        >
          <button
            className="w-full"
            onClick={() => setSelectedStock(stock.symbol)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{stock.symbol}</span>
                {selectedStock === stock.symbol && (
                  <ArrowRight className="h-4 w-4 text-neutral-400" />
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-mono">
                  ₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </span>
                <div
                  className={`flex items-center gap-1 ${
                    stock.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stock.change >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  <span className="text-xs">
                    {Math.abs(stock.changePercent).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}


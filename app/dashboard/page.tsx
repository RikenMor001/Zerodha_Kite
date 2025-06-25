"use client";

import { useState } from "react";
import AppBar from "../components/appbar";
import SearchBar from "../components/searchBar";
import TradingViewWidget from '../components/CandlestickChart';

const STOCKS = [
  { symbol: "NSE:NIFTY", name: "NIFTY 50" },
  { symbol: "BSE:SENSEX", name: "SENSEX" },
  { symbol: "NSE:HDFCBANK", name: "HDFC Bank" },
  { symbol: "NSE:ICICIBANK", name: "ICICI Bank" },
  { symbol: "NSE:KOTAKBANK", name: "Kotak Bank" },
  { symbol: "NSE:AXISBANK", name: "Axis Bank" },
  { symbol: "NSE:SBIN", name: "SBI" },
];

export default function Dashboard() {
  const [selectedSymbol, setSelectedSymbol] = useState<string>(STOCKS[0].symbol);
  const [hoveredSymbol, setHoveredSymbol] = useState<string | null>(null);
  const [showBuySell, setShowBuySell] = useState<string | null>(null);
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [orderQty, setOrderQty] = useState('');
  const [limitPrice, setLimitPrice] = useState('');

  return (
    <div>
      <AppBar />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
        <div className="grid grid-cols-[30%_70%] gap-4 p-4 min-h-screen">
          <div className="border-r border-neutral-800 pr-6">
            <SearchBar />
            <div className="text-white font-semibold text-xs mt-5">
              {STOCKS.map((stock) => (
                <div
                  key={stock.symbol}
                  className={`mb-2 rounded-md border border-neutral-800 hover:border-orange-500 shadow-lg w-[90%] p-3 transition-all duration-200 relative group bg-neutral-900 ${selectedSymbol === stock.symbol ? 'ring-2 ring-orange-500' : ''}`}
                  onMouseEnter={() => setHoveredSymbol(stock.symbol)}
                  onMouseLeave={() => setHoveredSymbol(null)}
                >
                  <button
                    className="w-full text-left"
                    onClick={() => setSelectedSymbol(stock.symbol)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{stock.name}</span>
                        <span className="text-neutral-400 text-xs ml-2">({stock.symbol})</span>
                      </div>
                    </div>
                  </button>
                  {hoveredSymbol === stock.symbol && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 z-10">
                      <button
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold shadow"
                        onClick={() => {
                          setShowBuySell(stock.symbol + '-buy');
                          setOrderType('market');
                          setOrderQty('');
                          setLimitPrice('');
                        }}
                      >Buy</button>
                      <button
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold shadow"
                        onClick={() => {
                          setShowBuySell(stock.symbol + '-sell');
                          setOrderType('market');
                          setOrderQty('');
                          setLimitPrice('');
                        }}
                      >Sell</button>
                    </div>
                  )}
                  {/* Modal for Buy/Sell with order type */}
                  {(showBuySell === stock.symbol + '-buy' || showBuySell === stock.symbol + '-sell') && (
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-neutral-800 border border-neutral-700 rounded-lg p-4 z-20 shadow-xl w-72">
                      <div className="text-white font-bold mb-2">{showBuySell.endsWith('-buy') ? 'Buy' : 'Sell'} {stock.name}</div>
                      <div className="mb-2 flex gap-2">
                        <button
                          className={`flex-1 py-1 rounded ${orderType === 'market' ? 'bg-orange-500 text-white' : 'bg-neutral-900 text-neutral-300 border border-neutral-700'}`}
                          onClick={() => setOrderType('market')}
                        >
                          Market
                        </button>
                        <button
                          className={`flex-1 py-1 rounded ${orderType === 'limit' ? 'bg-orange-500 text-white' : 'bg-neutral-900 text-neutral-300 border border-neutral-700'}`}
                          onClick={() => setOrderType('limit')}
                        >
                          Limit
                        </button>
                      </div>
                      <input
                        className="w-full mb-2 p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
                        placeholder="Quantity"
                        type="number"
                        value={orderQty}
                        onChange={e => setOrderQty(e.target.value)}
                      />
                      {orderType === 'limit' && (
                        <input
                          className="w-full mb-2 p-2 rounded bg-neutral-900 border border-neutral-700 text-white"
                          placeholder="Limit Price"
                          type="number"
                          value={limitPrice}
                          onChange={e => setLimitPrice(e.target.value)}
                        />
                      )}
                      <button
                        className={`w-full ${showBuySell.endsWith('-buy') ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white rounded-lg py-2 font-semibold mt-2`}
                        onClick={() => setShowBuySell(null)}
                      >
                        Confirm {showBuySell.endsWith('-buy') ? 'Buy' : 'Sell'}
                      </button>
                      <button className="w-full mt-2 text-xs text-neutral-400 hover:underline" onClick={() => setShowBuySell(null)}>Cancel</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-screen">
            <div className="w-full h-[70vh]">
              <TradingViewWidget 
                symbol={selectedSymbol} 
                interval="15" 
                theme="dark" 
                height={600} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

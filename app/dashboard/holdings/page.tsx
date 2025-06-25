"use client"

import AppBar from "@/app/components/appbar";
import SearchBar from "@/app/components/searchBar";

const STOCKS = [
  { symbol: "NSE:NIFTY", name: "NIFTY 50" },
  { symbol: "BSE:SENSEX", name: "SENSEX" },
  { symbol: "NSE:HDFCBANK", name: "HDFC Bank" },
  { symbol: "NSE:ICICIBANK", name: "ICICI Bank" },
  { symbol: "NSE:KOTAKBANK", name: "Kotak Bank" },
  { symbol: "NSE:AXISBANK", name: "Axis Bank" },
  { symbol: "NSE:SBIN", name: "SBI" },
];

export default function Holdings() {
    return <div>
        <AppBar/>
        <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900">
            <div className="grid grid-cols-[30%_70%] gap-4 p-4 min-h-screen">
                <div className="border-r border-neutral-800 pr-6">
                    <SearchBar/>
                    <div className="text-white font-semibold text-xs mt-5">
                        {STOCKS.map((stock) => (
                            <div
                                key={stock.symbol}
                                className="mb-2 rounded-md border border-neutral-800 hover:border-orange-500 shadow-lg w-[90%] p-3 transition-all duration-200 bg-neutral-900"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">{stock.name}</span>
                                        <span className="text-neutral-400 text-xs ml-2">({stock.symbol})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-col min-h-screen">
                    <div className="text-white ml-5 font-semibold text-2xl border-b border-b-neutral-800 shadow-md p-2">
                        Holdings
                    </div>
                    <div className="text-white flex justify-center items-center min-h-[60vh]">
                        Holdings page content here
                    </div>
                </div>
            </div>
        </div>
    </div>
}

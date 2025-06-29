"use client"

import AppBar from "@/app/components/appbar";
import SearchBar from "@/app/components/searchBar";
import { useState } from "react";

const global_date = new Date();

const MOCK_ORDERS = [{
  id: "ORD001",
  symbol: "NSE:HDFCBANK",
  name: "HDFC BANK",
  price: 1950.50,
  executedPrice: 1951,
  type: "MARKET",
  brokerage: 20.00,
  sllipage: 5.00,
  timeStamp: global_date,
  taxes: 2.00,
  totalAmount: 20000.50,
  quantity: 10,
  status: "COMPLETED"
},{
  id: "ORD002",
  symbol: "NSE:ICICIBANK",
  name: "ICICI BANK",
  price: 1700.50,
  executedPrice: 1700.55,
  type: "MARKET",
  brokerage: 20.00,
  sllipage: 5.00,
  timeStamp: global_date,
  taxes: 2.00,
  totalAmount: 20000.50,
  quantity: 14,
  status: "PENDING"
},{
  id: "ORD003",
  symbol: "NSE:AXISBANK",
  name: "AXIS BANK",
  price: 1349.90,
  executedPrice: 1350,
  type: "MARKET",
  brokerage: 20.00,
  sllipage: 5.00,
  timeStamp: global_date,
  taxes: 2.00,
  totalAmount: 20000.50,
  quantity: 17,
  status: "CANCELLED"
},{
  id: "ORD004",
  symbol: "NSE:RELIANCE",
  name: "RELIANCE",
  price: 2300.00,
  executedPrice: 2300,
  type: "MARKET",
  brokerage: 20.00,
  sllipage: 5.00,
  timeStamp: global_date,
  taxes: 2.00,
  totalAmount: 30000.60,
  quantity: 30,
  status: "COMPLETED"
},{
  id: "ORD005",
  symbol: "NSE:MRF",
  name: "HDFC BANK",
  price: 134000.50,
  executedPrice: 1340001,
  type: "MARKET",
  brokerage: 100.00,
  sllipage: 12.00,
  timeStamp: global_date,
  taxes: 2.00,
  totalAmount: 13.50,
  quantity: 10,
  status: "COMPLETED"
}, 
]

type OrderStatus = "COMPLETED" | "PENDING" | "CANCELLED";
type MarketType = "BUY" | "SELL";
type OrderType = "MARKET" | "LIMIT";

const STOCKS = [
  { symbol: "NSE:NIFTY", name: "NIFTY 50" },
  { symbol: "BSE:SENSEX", name: "SENSEX" },
  { symbol: "NSE:HDFCBANK", name: "HDFC Bank" },
  { symbol: "NSE:ICICIBANK", name: "ICICI Bank" },
  { symbol: "NSE:KOTAKBANK", name: "Kotak Bank" },
  { symbol: "NSE:AXISBANK", name: "Axis Bank" },
  { symbol: "NSE:SBIN", name: "SBI" },
];

export default function Orders() {

  const [statusType, setStatusType] = useState<OrderStatus | "ALL">("ALL");
  const [selectedType, setSelectedType] = useState<MarketType | "ALL">("ALL"); 
  const [orderType, setOrderType] = useState<OrderType | "ALL">("ALL")

  const getStatusColor = (status: OrderStatus) => {
    switch(status) {
      case "COMPLETED":
        return "text-green-500 bg-green-500/10 border-green-500/20";
      case "PENDING":
        return "text-neutral-500 bg-neutral-500/10 border-neutral-500/20";
      case "CANCELLED":
        return "text-red-500 bg-red-500/10 border-red-500/20";
    }
  }

  const getMarketTypeColor = (status: MarketType) => {
    switch (status) {
      case "BUY":
        return "text-green-700 bg-green-700/10 border-green-700/20"
      case "SELL":
        return "text-red-700 bg-red-700/10 border-red-700/20"
    }
  }

  const getOrderTypeColor = (status: OrderType) => {
    switch(status){
      case "MARKET":
        return "text-orange-500 bg-orange-500/10 border-orange-500/20"
      case "LIMIT":
        return "text-neutral-500 bg-neutral-500/10 border-neutral-500/20"
    }
  }

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
              Orders
            </div>
            <div className="text-white flex justify-center items-center min-h-[60vh]">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

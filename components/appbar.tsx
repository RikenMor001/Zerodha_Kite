'use client';
import { useState } from 'react';

export default function AppBar() {
  const [niftyPrice] = useState<number>(24004.75);
  const [sensexPrice] = useState<number>(79223.11);
  const [numberChangeNifty] = useState<number>(-183.9);
  const [numberChangeSensex] = useState<number>(-720.6);
  const userId = "HPD412";
  const userInitial = userId[0];

  return (
    <div className="border-b shadow-xl p-3 flex bg-neutral-900 border-b-slate-800 justify-between items-center">
      <div className="flex text-sm font-semibold relative">
        <div className="flex space-x-3 ml-32">
          <div className="text-white">
            <button aria-label="NIFTY 50">
              NIFTY 50
            </button>
          </div>
          <div className="text-red-500">
            {niftyPrice}
          </div>
          <div className="text-gray-600 text-xs">
            {numberChangeNifty} (-0.76%)
          </div>
        </div>
        <div className="flex space-x-3 ml-10">
          <div className="text-white">
            <button aria-label="SENSEX">
              SENSEX
            </button>
          </div>
          <div className="text-red-500">
            { sensexPrice } 
          </div>
          <div className="text-gray-600 text-xs">
            { numberChangeSensex } (-0.90%)
          </div>
        </div>
        <div className="border-l text-white ml-2 shadow-xl border-slate-800 flex space-x-9">
          <div className="text-blue-500 ml-20">
            Zerodha
          </div>
          <div className="flex space-x-9">
            <button aria-label="Dashboard">Dashboard</button>
            <button aria-label="Orders">Orders</button>
            <button aria-label="Holdings">Holdings</button>
            <button aria-label="Positions">Positions</button>
            <button aria-label="Bids">Bids</button>
            <button aria-label="Funds">Funds</button>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-lg">
          { userInitial }
        </div>
        <div>
            <button>
                { userId }
            </button>
        </div>
      </div>
    </div>
  );
}

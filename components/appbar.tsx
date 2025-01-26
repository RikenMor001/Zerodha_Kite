'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppBar() {
  const [ niftyPrice ] = useState<number>(24004.75);
  const [ sensexPrice ] = useState<number>(79223.11);
  const [ numberChangeNifty ] = useState<number>(-183.9);
  const [ numberChangeSensex ] = useState<number>(-720.6);
  const userId = "HPD412";
  const userInitial = userId[0];
  const router = useRouter();

  const takeUserToDashboard = () => {
    router.push("/dashboard")
  }

  const takeUserToBids = () => {
    router.push("/dashboard/bids")
  }

  const takeUserToFunds = () => {
    router.push("/dashboard/funds")
  }

  const takeUserToOrders = () => {
    router.push("/dashboard/orders")
  }

  const takeUserToPositions = () => {
    router.push("/dashboard/positions")
  }

  const takeUserToHolding = () => {
    router.push("/dashboard/holdings")
  }

  return (
    <div className="border-b shadow-4xl p-3 flex bg-neutral-900 border-b-neutral-800 justify-between items-center">
      <div className="flex text-sm relative">
        <div className="flex space-x-3 ml-32">
          <div className="text-white">
            <button aria-label="NIFTY 50" className='font-semibold' >
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
            <button aria-label="SENSEX"
            className='font-semibold'>
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

        <div className="border-l text-white ml-2 border-neutral-800 flex space-x-9">
          <div className="text-orange-500 ml-20 font-semibold">
            <button onClick={ takeUserToDashboard }>
              Zerodha
            </button>
          </div>
          <div className="flex space-x-9">
            <button className="hover:text-orange-500 hover:underline" onClick={ takeUserToDashboard }>Dashboard</button>
            <button className="hover:text-orange-500 hover:underline" onClick={ takeUserToOrders }>Orders</button>
            <button className="hover:text-orange-500 hover:underline" onClick={ takeUserToHolding }>Holdings</button>
            <button className="hover:text-orange-500 hover:underline" onClick={ takeUserToPositions }>Positions</button>
            <button className="hover:text-orange-500 hover:underline" onClick={ takeUserToBids }>Bids</button>
            <button className="hover:text-orange-500 hover:underline" onClick={ takeUserToFunds }>Funds</button>
          </div>
        </div>
        
      </div>
      <div className="flex items-center space-x-2 text-white">
        <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
          { userInitial }
        </div>
        <div>
            <button className='text-sm hover:text-orange-500 hover:underline'>
                { userId }
            </button>
        </div>
      </div>
    </div>
  );
}


'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppBar() {
  const [niftyPrice] = useState(23000.75);
  const [sensexPrice] = useState(79273.11);
  const [numberChangeNifty] = useState(-143.9);
  const [numberChangeSensex] = useState(-710.6);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userId = "HPD412";
  const userInitial = userId[0];
  const router = useRouter();

  const takeUserToDashboard = () => router.push("/dashboard");
  const takeUserToBids = () => router.push("/dashboard/bids");
  const takeUserToFunds = () => router.push("/dashboard/funds");
  const takeUserToOrders = () => router.push("/dashboard/orders");
  const takeUserToPositions = () => router.push("/dashboard/positions");
  const takeUserToHolding = () => router.push("/dashboard/holdings");
  const takeUserToSignInPage = () => router.push("/signin")

  return (
    <div className="border-b shadow-4xl p-3 flex bg-neutral-900 border-b-neutral-800 justify-between items-center">
      <div className="flex text-sm relative">
        <div className="flex space-x-3 ml-32">
          <div className="text-white font-semibold">NIFTY 50</div>
          <div className="text-red-500">{niftyPrice}</div>
          <div className="text-gray-600 text-xs">{numberChangeNifty} (-0.76%)</div>
        </div>
        <div className="flex space-x-3 ml-10">
          <div className="text-white font-semibold">SENSEX</div>
          <div className="text-red-500">{sensexPrice}</div>
          <div className="text-gray-600 text-xs">{numberChangeSensex} (-0.90%)</div>
        </div>
        <div className="border-l text-white ml-2 border-neutral-800 flex space-x-9">
          <div className="text-orange-500 ml-20 font-semibold">
            <button onClick={takeUserToDashboard}>Zerodha</button>
          </div>
          <div className="flex space-x-9">
            <button className="hover:text-orange-500 hover:underline" onClick={takeUserToDashboard}>Dashboard</button>
            <button className="hover:text-orange-500 hover:underline" onClick={takeUserToOrders}>Orders</button>
            <button className="hover:text-orange-500 hover:underline" onClick={takeUserToHolding}>Holdings</button>
            <button className="hover:text-orange-500 hover:underline" onClick={takeUserToPositions}>Positions</button>
            <button className="hover:text-orange-500 hover:underline" onClick={takeUserToBids}>Bids</button>
            <button className="hover:text-orange-500 hover:underline" onClick={takeUserToFunds}>Funds</button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center space-x-2 text-white">
        <div className="flex items-center space-x-2">
          <div className="bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {userInitial}
          </div>
          <button className="text-sm hover:text-orange-500 hover:underline" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {userId}
          </button>
        </div>
        {dropdownOpen && (
          <div className="absolute top-full mt-2 w-32 bg-neutral-800 text-white shadow-lg rounded-md py-2 z-10">
            <button className="px-4 py-2 hover:bg-neutral-700 w-full text-left" onClick={ takeUserToSignInPage }>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}


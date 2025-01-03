"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState<string | any>();

  return (
    <div className="flex justify-center items-center bg-black min-h-screen text-gray-200">
      <div className="rounded-lg shadow-lg w-96 bg-gray-900">
        <div className="flex flex-col justify-center items-center font-lightweight text-2xl p-6 text-gray-200">
          Login to kite
        </div>
        <div>
          <Input
            placeholder="Phone or User ID"
            type="text"
            onChange={(e) => setUserId(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <button className="w-80 bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            Login
          </button>
        </div>
        <div className="flex justify-center items-center text-sm text-gray-500 hover:text-orange-600 mb-6">
          <button>
          Forgot user ID or password?
          </button>        
        </div>
        <div className="flex justify-center font-semibold text-gray-200 p-1">
          Zerodha 
        </div>
        <p>
          <div className="flex justify-center items-center text-sm text-gray-600">
            <div className="w-[90%]">
            Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart Online Dispute Resolution | SEBI SCORES  
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

interface LoginProps {
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, type, onChange }: LoginProps) {
  return (
    <div className="flex justify-center items-center p-3">
      <input
        className="flex w-80 rounded-md border border-gray-700 text-md text-gray-500 px-5 py-3 bg-gray-900 justify-center items-center"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}

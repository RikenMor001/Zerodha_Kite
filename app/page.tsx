"use client";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ userId: string; password: string }>({
    userId: "",
    password: "",
  });

  const handleLogin = () => {
    const newErrors = {
      userId: userId ? "" : "Please enter your User ID.",
      password: password ? "" : "Please enter your Password.",
    };
    setErrors(newErrors);

    if (!newErrors.userId && !newErrors.password) {
      // Proceed with login logic
      console.log("Logging in...");
    }
  };

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
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            error={errors.userId}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <button
            className="w-80 bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="flex justify-center items-center text-sm text-gray-500 hover:text-orange-600 mb-6">
          <button>Forgot user ID or password?</button>
        </div>
        <div className="flex justify-center items-center p-2">
          <img
            src="https://cdn.brandfetch.io/idZmHUWU0C/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Zerodha Logo"
            className="h-4"
          />
        </div>
        <div className="flex justify-center items-center text-xs text-gray-600">
          <div className="w-[80%]">
            Zerodha Broking Limited: Member of NSE, BSE ‐ SEBI Reg. no.
            INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Zerodha
            Commodities Pvt. Ltd.: MCX ‐ SEBI Reg. no. INZ000038238 | Smart
            Online Dispute Resolution | SEBI SCORES
          </div>
        </div>
      </div>
    </div>
  );
}

interface LoginProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export function Input({ placeholder, type, value, onChange, error }: LoginProps) {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <input
        className={`flex w-80 rounded-md border text-md px-5 py-3 bg-gray-900 justify-center items-center ${
          error ? "border-red-500" : "border-gray-700"
        }`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

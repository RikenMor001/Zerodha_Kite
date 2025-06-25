"use client";

import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Input from "@/app/components/Input";

export default function Home() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ userId: string; password: string }>({
    userId: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");
  const userIdName = "RC";
  const router = useRouter();

  const handleSignup = async () => {
    const newErrors = {
      userId: userId ? "" : "Please enter your User ID.",
      password: password ? "" : "Please enter your Password.",
    };
    setErrors(newErrors);

    if (!newErrors.userId && !newErrors.password) {
      try {
        const response = await axios.post("/api/signup", {
          email: userId,
          password: password,
        });
        if (response.status === 200) {
          setMessage("User created successfully!");
          router.push("/signin");
        } else {
          setMessage(response.data.error);
        }
      } catch (error) {
        setMessage("An error occurred during signup.");
        console.error("Signup error:", error);
      }
    }
  };

  const takeUserToSignup = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center bg-neutral-900 min-h-screen text-gray-200">
      <div className="rounded-lg shadow-xl w-96 bg-neutral-900 border border-neutral-800">
        <div className="flex flex-col justify-center items-center font-light text-2xl p-6 text-gray-200">
          <div className="flex items-center space-x-2 text-white">
            <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center text-lg mb-3">
              <button onClick={takeUserToSignup}>{userIdName}</button>
            </div>
          </div>
          Signup to kite
        </div>
        <div>
          <Input
            placeholder="Phone or User ID"
            type="text"
            value={userId}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUserId(e.target.value)
            }
            error={errors.userId}
          />

          <Input
            placeholder="Password"
            type={togglePassword ? "text" : "password"}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            error={errors.password}
            showToggle
            toggleVisibility={() => setTogglePassword((prev) => !prev)}
            isVisible={togglePassword}
          />
        </div>
        <div className="flex justify-center items-center p-4">
          <button
            className="w-80 bg-orange-500 text-white py-2 rounded hover:bg-orange-800 shadow-lg border-neutral-800"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
        {message && (
          <div className="flex justify-center items-center text-sm text-red-500 mb-6">
            {message}
          </div>
        )}
        <div className="flex justify-center items-center p-2">
          <Image
            src="https://cdn.brandfetch.io/idZmHUWU0C/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Zerodha Logo"
            className="h-4"
            width={110}
            height={10}
          />
        </div>
        <div className="flex justify-center items-center text-xs text-gray-600">
          <div className="w-[80%] mb-5">
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

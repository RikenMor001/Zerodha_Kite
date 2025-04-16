"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [togglePassword, setTogglePassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ userId: string; password: string }>({
    userId: "",
    password: "",
  });
  const [message, setMessage] = useState<string>("");
  const userIdName = "RC"
  const router = useRouter();

  const handleSignup = async () => {
    const newErrors = {
      userId: userId ? "" : "Please enter your User ID.",
      password: password ? "" : "Please enter your Password.",
    };
    setErrors(newErrors);

    if (!newErrors.userId && !newErrors.password) {
      try {
        const response = await axios.post("/api/signin", {
          email: userId,
          password: password,
        });
        if (response.status === 200) {
          setMessage("User logged in successfully!");
          router.push("/dashboard");
        } else {
          setMessage(response.data.error);
        }
      } catch (error) {
        setMessage("An error occurred during signin.");
        console.error("Signin error:", error);
      }
    }
  };

  const takeUserToSignin = () => {
    router.push("/signin")
  }

  return (
    <div className="flex justify-center items-center bg-neutral-900 min-h-screen text-gray-200">
      <div className="rounded-lg shadow-xl w-96 bg-neutral-900 border border-neutral-800">
        <div className="flex flex-col justify-center items-center font-light text-2xl p-6 text-gray-200">
        <div className="flex items-center space-x-2 text-white">
        <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center text-lg mb-3">
          <button onClick={ takeUserToSignin }>
            { userIdName }
          </button>
        </div>
      </div>
          Signin
        </div>
        <div>
          <Input
            placeholder="Enter your phone or User ID"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            error={errors.userId}
          />

          <Input
            placeholder="Enter your password"
            type={togglePassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Signin
          </button>
        </div>
        {message && (
          <div className="flex justify-center items-center text-sm text-red-500 mb-6">
            { message }
          </div>
        )}
        <div className="flex justify-center items-center p-4">
          <Image
            src="https://cdn.brandfetch.io/idZmHUWU0C/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="Zerodha Logo"
            className="h-4"
            width={110}
            height={10}
          />
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
  showToggle?: boolean;
  isVisible?: boolean;
  toggleVisibility?: () => void;
}

export function Input({
  placeholder,
  type,
  value,
  onChange,
  error,
  showToggle,
  isVisible,
  toggleVisibility,
}: LoginProps) {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      <div className="relative w-80">
        <input
          className={`flex w-full rounded-md border text-md px-5 py-3 bg-neutral-900 justify-center items-center shadow-lg ${
            error ? "border-red-500" : "border-neutral-800"
          }`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />

        {showToggle && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            {isVisible ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
      </div>
    </div>
  );
}


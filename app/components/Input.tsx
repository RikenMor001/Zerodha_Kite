"use client";

import { ChangeEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

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

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  error,
  showToggle,
  isVisible,
  toggleVisibility,
}: LoginProps) => {
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
};

export default Input;

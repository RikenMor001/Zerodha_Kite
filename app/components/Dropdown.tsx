"use client";

interface DropDownStocksProps {
  type: string;
  placeholder: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Dropdown = ({ type, placeholder, onChange }: DropDownStocksProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-neutral-700 rounded-md py-3 px-7 mt-3 w-full bg-neutral-800 text-neutral-300 text-center shadow-lg placeholder-neutral-100"
        onChange={onChange}
      />
    </div>
  );
};

export default Dropdown;

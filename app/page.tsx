import { ChangeEvent } from "react"


export default function home(){
  return <div className="flex justify-center items-center bg-black min-h-screen text-white">
    <div className="rounded-lg shadow-lg w-96 bg-gray-900">
      <div className="flex flex-col justify-center items-center font-lightweight text-xl p-5">
          Login to kite
      </div>
      <div>
          <Input
            placeholder="Phone or User ID"
            type="text"
            onChange={(e) => e.target.value}
          />
          </div>
    </div>
  </div>
}

interface LoginProps{
  placeholder: string
  type: string  
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function Input({ placeholder, type, onChange}: LoginProps){
  return <div className="flex justify-center items-center"> 
    <div className="flex flex-col w-80 rounded-md border border-gray-700 text-md text-gray-500 px-4 py-2 justify-center items-center">
      { placeholder }
    </div>
  </div>
}

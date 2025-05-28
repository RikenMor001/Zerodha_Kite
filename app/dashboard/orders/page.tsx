
"use client"

import AppBar from "@/app/components/appbar";
import Recommendations from "@/app/components/recommendations";
import SearchBar from "@/app/components/searchBar";
import { useState } from "react";

export default function Orders(){
    const [ dropDown, setDropDownOpen ] = useState(false); 
    return <div>
        <AppBar/>
        <div className="min-h-screen bg-neutral-900">
            <div className="grid grid-cols-[35%_65%] gap-4 p-4">
                <div className="border-r border-neutral-800">
                    <SearchBar/>
                    <Recommendations/>
                </div>
                <div>
                    <div className="text-white ml-5 font-semibold text-2xl border-b border-b-neutral-800 shadow-md p- ">
                        Orders
                    </div>
                    <div className="text-gray-400 flex flex-col justify-center min-h-screen text-sm items-center">
                        <p> You haven't placed any orders today </p>
                        <button className="mt-2 border border-black py-3 px-6 rounded-md bg-blue-600 hover:bg-blue-700 text-white" onClick={ () => setDropDownOpen( !dropDown )}> 
                            Get started
                        </button> 
                        {dropDown && (
                            <div>
                                <Dropdown
                                type="text"
                                placeholder="Search a stock"
                                onChange={(e: any) => console.log(e.target.value)}
                                />
                            </div>                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
}


interface DropDownStocksProps{
    type: string,
    placeholder: string,
    onChange: (e: any) => void
}

export const Dropdown = ({type, placeholder, onChange}: DropDownStocksProps) => {
    return <div>
        <input 
        type={ type } 
        placeholder={ placeholder }
        className="border border-neutral-700 rounded-md py-3 px-7 mt-3 w-full bg-neutral-800 text-neutral-300 text-center shadow-lg placeholder-neutral-100 " 
        onChange={ onChange }
        >    
        </input>
    </div>      
}
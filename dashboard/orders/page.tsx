
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
                            <div className="bg-neutral-800 rounded-lg py-3 px-3 mt-3">
                                Search your stock here    
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

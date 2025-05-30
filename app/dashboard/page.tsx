
"use client"

import { useState } from "react";
import AppBar from "../components/appbar";
import Recommendations from "../components/recommendations";
import SearchBar from "../components/searchBar";

export default function dashboard(){

    const [ accountBalance, setAccountBalance ] = useState< number | any>("1,00,00,000");

    return <div>
        <AppBar/>
        <div className="min-h-screen bg-neutral-900">
            <div className="grid grid-cols-[35%_65%] gap-4 p-4">
                <div className="border-r border-neutral-800">
                    <SearchBar/>
                    <Recommendations/>
                </div>
                <div className="flex-1 p-5">
                    <div className="text-white text-2xl font-bold mb-4">Dashboard</div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-neutral-800 p-1 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                            <div className="text-neutral-400 text-sm">Account Balance</div>
                            <div className="text-white text-xl font-semibold mt-2">₹{accountBalance}</div>
                        </div>
                        <div className="bg-neutral-800 p-1 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                            <div className="text-neutral-400 text-sm">Holdings</div>
                            <div className="text-white text-xl mt-2">15 Stocks</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
}
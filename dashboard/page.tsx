
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
                <div>
                    <div className="text-white ml-5 font-semibold text-2xl border-b border-b-neutral-800 shadow-md p- ">
                        Dashboard
                    </div>
                    <div className=" font-semibold text-2xl ml-4 mt-5">
                        <div className="text-neutral-500 text-sm">
                            Account Balance
                        </div>
                        <div className="text-white text-2xl">
                            { accountBalance }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

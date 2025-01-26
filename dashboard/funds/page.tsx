
"use client"

import AppBar from "@/app/components/appbar";
import Recommendations from "@/app/components/recommendations";
import SearchBar from "@/app/components/searchBar";

export default function Funds(){
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
                        Funds
                    </div>
                    <div className="text-white flex justify-center items-center min-h-screen">
                        Funds page
                    </div>
                </div>
            </div>
        </div>
    </div>
}

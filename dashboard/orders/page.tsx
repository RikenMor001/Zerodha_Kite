
"use client"

import AppBar from "@/app/components/appbar";
import Recommendations from "@/app/components/recommendations";
import SearchBar from "@/app/components/searchBar";

export default function Orders(){

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
                    <div className="text-white text-gray-400 flex justify-center min-h-screen text-sm items-center">
                        You haven't placed any orders today 
                    </div>
                </div>
            </div>
        </div>
    </div>
}

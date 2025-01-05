'use client'
import { useState } from "react"


export default function AppBar(){
    const [ niftyPrice, setniftyPrice ] = useState<number | any>(24004.75);
    const [ sensexPrice, setSensexPrice ] = useState<number | any>(79223.11);
    const [ numberChangeNifty, setNumberChangeNifty ] = useState<number | any>(-183.90);
    const [ numberChangeSensex, setnumberChangeSensex ] = useState<number | any>(-720.60);

    return <div className = "border border-b shadow-xl p-4 flex bg-black p-5">
        <div className="flex text-sm justify-content absolute left-0 top-3 font-semibold">
            <div className="flex ml-32">
                <div className="text-white">
                    Nifty 50 
                </div>
                <div className="ml-3 text-red-500">
                    { niftyPrice }
                </div>
                <div className="text-gray-600 text-xs ml-2">
                    {numberChangeNifty}
                </div>
            </div>
            <div className="flex ml-10 ">
                <div className="text-white">
                    Sensex 
                </div>
                <div className="ml-3 text-red-500">
                    { sensexPrice }
                </div>
                <div className="text-gray-600 text-xs ml-2">
                    { numberChangeSensex }
                </div>
            </div>
        </div>
        
        <div>

        </div>
    </div>
}

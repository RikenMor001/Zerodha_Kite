'use client'
import { useState } from "react"


export default function AppBar(){
    const [ niftyPrice, SetniftyPrice ] = useState<number | any>(24004.75);
    const [ sensexPrice, SetSensexPrice ] = useState<number | any>(79223.11);
    return <div className = "border border-b shadow-xl p-4 flex bg-black text-white p-5">
        <div className="flex text-sm justify-content absolute left-0 top-3 font-semibold">
            <div className="flex ml-32">
                <div>
                    Nifty 50 
                </div>
                <div className="ml-3 text-red-500">
                    { niftyPrice }
                </div>
            </div>
            <div className="flex ml-10">
                <div>
                    Sensex 
                </div>
                <div className="ml-3 text-red-500">
                    { sensexPrice }
                </div>
            </div>
        </div>
        
        <div>

        </div>
    </div>
}

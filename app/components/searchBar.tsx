"use client"

import { ChangeEvent, useState } from "react";

export default function SearchBar(){
    const [ searchBar, setSearchBar ] = useState<string>("");  
    return <div>
            <div className="mr-5"> 
                <Input
                placeholder="Search eg: hdfc nse, infy bse, nifty fut"
                type="text"
                onChange={(e) => setSearchBar(e.target.value)}
                />
        </div>
        <p className="text-sm text-neutral-400 mt-2"> You typed: {searchBar}</p>        
    </div>
}

interface searchBarProps {
    placeholder: string;
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({placeholder, type, onChange}: searchBarProps){
    return <div>
        <input 
        placeholder={ placeholder}   
        type={ type } 
        onChange={ onChange }
        className="bg-neutral-900 w-full rounded-lg border text-md px-5 py-3 shadow-lg border-neutral-800 placeholder-neutral-600 text-neutral-100" 
        />  
    </div>
}

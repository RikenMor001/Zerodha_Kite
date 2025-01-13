import { ChangeEvent } from "react"


export default function SearchBar(){
    return <div>
        <div className="">
        Search eg: infy bse, nifty fut, index fund, etc
        </div>
    </div>
}


interface SearchBarProps {
    placeholder: string
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function SearchBarInputs({placeholder, type, value, onChange}: SearchBarProps){
    return <div>
        
    </div>
}
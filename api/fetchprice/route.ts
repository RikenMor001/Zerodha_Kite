import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// use useEffect in the frontend code and also after i get the api key than i should be using web sockets 

export default async function POST(req:NextRequest, res: NextResponse){
    try {
        const response = await axios.get("//your_api_key");
        const data = await response.data;
        if (data.status === 200){
            NextResponse.json({
                message: "Data fetched successfully"
            })
            return data;
        }
    }catch(error:any){
        throw new Error("The error is:- " + error)
    }
    
}
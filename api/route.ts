
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export default async function POST(req: NextRequest){
    const [ email, password ] = await req.json();
    const user = await  prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if ( !user ){
        NextResponse.json({
            error: "User not found"
        })
    }
    
    // const hashedPassword = await bcrypt.hash(password, 10);

        

    
}

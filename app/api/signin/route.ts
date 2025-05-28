
// signin logic when the user has already signed up and i want to check if the user exists in the database and if the password is correct and then return the status code 200 and the message "user logged in successfully!"

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
  try {
    const { email, password } = await req.json();
    if (!email && !password){  
      return NextResponse.json({
        error: "Please enter your user credentials"
      }, { status: 400 }) 
    }

    const user = await prisma.user.findUnique({
      where: {
        email:email
      }
    })

    if ( !user ){
      return NextResponse.json({
        error: "User not found"
      }, {status: 400})
    }

    const isPasswordCorrect = await bcrypt.compare( password, user.password );
    if ( !isPasswordCorrect ){
      return NextResponse.json({
        error: "Incorrect password",
        alert: "Please enter the correct password"
      }, {status: 400})
    }

    return NextResponse.json({
      message: "User logged in successfully!",
      alert: "User logged in successfully!"
    }, {status: 200})
  } catch( error: any ){
    return NextResponse.json({
      error: error.message,
    }, {status: 500})
  }
}



import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();


import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function POST(req: NextRequest, res: NextResponse){
  try {
  const { email, password } = await req.json();
  if (!email && !password){
    return NextResponse.json({
      error: "Email and password are required"
    }, {status: 400});
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  
  if (!user){
    return NextResponse.json({
      error: "User not found"
    })
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if ( !isPasswordCorrect ){
    return NextResponse.json({
      error: "Incorrect password"
    }, {status: 401})
  }

  return NextResponse.json({
    message: "User signed in successfully"
  }, {status: 201})
} catch (error: any){
  return NextResponse.json({
    error: error.message
  })
}
}
export default async function POST(req: NextRequest, res: NextResponse){
  try {
  const { email, password } = await req.json();
  if (!email && !password){
    return NextResponse.json({
      error: "Email and password are required"
    }, {status: 400});
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  })
  
  if (!user){
    return NextResponse.json({
      error: "User not found"
    })
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if ( !isPasswordCorrect ){
    return NextResponse.json({
      error: "Incorrect password"
    }, {status: 401})
  }

  return NextResponse.json({
    message: "User signed in successfully"
  }, {status: 201})
} catch (error: any){
  return NextResponse.json({
    error: error.message
  })
}
}

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
  const { email, password } = await req.json();

  const existingUser = await prisma.user.findUnique({
    where: { email: email }
  });

  if ( existingUser ) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword
    }
  });

  return NextResponse.json({
    user: newUser.email,
    message: "User created successfully"
  }, { status: 201 });
} catch(error: any){
  return NextResponse.json({
    error: error.message
  })
}
}

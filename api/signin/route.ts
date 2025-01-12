import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      return NextResponse.json({
        error: "Invalid username or password"
      }, { status: 400 });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return NextResponse.json({
        error: "Invalid username or password"
      }, { status: 400 });
    }

    return NextResponse.json({
      message: "User logged in successfully!"
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      error: "An error occurred during signin"
    }, { status: 500 });
  }
}

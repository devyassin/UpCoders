import connect from "@/database/database";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";
connect();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    //u can do validation here and see if the user has entered all the required fields

    //check if the user exists

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

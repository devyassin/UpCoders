import connect from "@/database/database";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, type, email, password, country } =
      await request.json();

    //check if the user exists

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    //now we gonna hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    //create new User
    const newUser = new User({
      firstName,
      lastName,
      type,
      email,
      password: hashedPassword,
      country,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

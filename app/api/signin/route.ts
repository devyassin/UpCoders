import connect from "@/database/database";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sign } from "@/helpers/jwt_sign_verify";

connect();

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "User not found. Please check your credentials." },
        { status: 404 }
      );
    }

    // Verify the password
    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        {
          message: "Invalid credentials. Please check your email and password.",
        },
        { status: 401 }
      );
    }

    // Create a JWT token
    const secretKey = process.env.JWT_SECRET_KEY!; // Replace this with a secure secret key
    const payload = {
      userId: user._id,
      email: user.email,
      isCompleted: user.isCompleted,
      type: user.type,
    }; // Customize the payload as per your needs
    // const options = { expiresIn: "7d" }; // Set the token expiration time as needed

    const token = await sign(payload, secretKey);
    const userObj = await User.findOne({ email }).select("-password");
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      payload,
      token,
      user: userObj,
    });

    response.cookies.set("token", token);

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

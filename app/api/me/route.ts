import { NextRequest, NextResponse } from "next/server";
import connect from "@/database/database";
import User from "@/models/User";
import { sign } from "@/helpers/jwt_sign_verify";
import { getDataFromToken } from "@/helpers/GetDataFromToken";
import { cookies } from "next/headers";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, response: NextResponse) {
  try {
    const userId = await getDataFromToken(request);
    const userObj = await request.json();

    const user = await User.findByIdAndUpdate({ _id: userId }, userObj, {
      new: true,
    }).select("-password");
    const secretKey = process.env.JWT_SECRET_KEY!;
    const payload = {
      userId: user._id,
      email: user.email,
      isCompleted: user.isCompleted,
      type: user.type,
    };
    const token = await sign(payload, secretKey);
    cookies().set("token", token);
    return NextResponse.json({
      message: "User Profile Complited",
      data: user,
      token: token,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import connect from "@/database/database";
import User from "@/models/User";
import { getDataFromToken } from "@/helpers/GetDataFromToken";

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

export async function PATCH(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const userObj = await request.json();

    const user = await User.findByIdAndUpdate({ _id: userId }, userObj);
    return NextResponse.json({
      message: "User Profile Complited",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

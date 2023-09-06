import connect from "@/database/database";
import { getDataFromToken } from "@/helpers/GetDataFromToken";
import { AuthCheck } from "@/helpers/AuthCheck";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const user = await User.findById({ _id: id });
    if (!user) {
      return NextResponse.json({ error: "User Not Found" });
    }
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}

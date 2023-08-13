import connect from "@/database/database";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const user = await User.findById(id);
  if (!user) {
    return NextResponse.json({ error: "User Not Found" });
  }
  return NextResponse.json({ user });
}

import { NextResponse } from "next/server";
import connect from "@/database/database";

connect();

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfully",
      success: true,
    });
    response.cookies.set("token", "", { expires: new Date(0) });
    response.cookies.delete("token");
    response.cookies.set("isComplited", "", {
      expires: new Date(0),
    });
    response.cookies.delete("isComplited");
    response.cookies.set("type", "", { expires: new Date(0) });
    response.cookies.delete("type");
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

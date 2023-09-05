import connect from "@/database/database";

import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    // const { searchParams } = new URL(req.url);
    // console.log(searchParams);
    const params = req.nextUrl.searchParams.values();
    console.log(params);
    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

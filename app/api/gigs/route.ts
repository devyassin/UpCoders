import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Gig from "@/models/Gig";
import { GigType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const gigs: GigType[] = await Gig.find({ user_id: userId });

    return NextResponse.json({ size: gigs.length, gigs: gigs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const gig: GigType = await request.json();
    const sameUser = await compareUserId(request, gig.user_id);
    if (!sameUser) {
      return NextResponse.json(
        { message: "not the same user !" },
        { status: 401 }
      );
    }
    const newGig = new Gig(gig);
    const savedGig = await newGig.save();

    return NextResponse.json({ message: "gig created", gig: savedGig });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

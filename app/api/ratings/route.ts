import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Rating from "@/models/Rating";
import { RatingType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const ratings: RatingType[] = await Rating.find({ user_id: userId });

    return NextResponse.json({ size: ratings.length, ratings: ratings });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const rating: RatingType = await request.json();
    const sameUser = await compareUserId(request, rating.user_id);
    if (!sameUser) {
      return NextResponse.json(
        { message: "not the same user !" },
        { status: 401 }
      );
    }
    const newRating = new Rating(rating);
    const savedRating = await newRating.save();

    return NextResponse.json({ message: "rating created", rating: savedRating });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

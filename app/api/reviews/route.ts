import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Review from "@/models/Review";
import { ReviewType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const reviews: ReviewType[] = await Review.find({ user_id: userId });

    return NextResponse.json({ size: reviews.length, reviews: reviews });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const review: ReviewType = await request.json();
    const sameUser = await compareUserId(request, review.user_id);
    if (!sameUser) {
      return NextResponse.json(
        { message: "not the same user !" },
        { status: 401 }
      );
    }
    const newReview = new Review(review);
    const savedReview = await newReview.save();

    return NextResponse.json({
      message: "review created",
      rating: savedReview,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

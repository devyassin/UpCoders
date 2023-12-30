import connect from "@/database/database";
import { APIFeatures, FromUrlToObject } from "@/helpers/ApiHelpers";

import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Review from "@/models/Review";
import { ReviewType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request)!;
    const queryObj = FromUrlToObject(request);
 
    const query = Review.find({
      gig_id: queryObj.gig_id,
    }).populate("user_id");

    const features = new APIFeatures(query, queryObj).sort().paginate();

    const reviews: ReviewType[] = await features.query;

    // Determine which gigs are favorites
    const reviewsWithNumberOfLikes = reviews.map((review) => ({
      ...review.toObject(),
      numberOfLikes: review.likes.length,
    }));

    return NextResponse.json({
      size: reviews.length,
      reviews: reviewsWithNumberOfLikes,
    });
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

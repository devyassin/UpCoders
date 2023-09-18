import connect from "@/database/database";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const reviewId = params.id;

    const review = await Review.findById({ _id: reviewId });

    if (!review) {
      return NextResponse.json(
        { message: "Review not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ review });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const reviewId = params.id;
    const review = await request.json();
    const updateReview = await Review.findByIdAndUpdate(
      { _id: reviewId },
      review,
      {
        new: true,
      }
    );

    if (!updateReview) {
      return NextResponse.json(
        { message: "Review not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Review Updated",
      task: updateReview,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const reviewId = params.id;

    const review = await Review.findByIdAndDelete({ _id: reviewId });
    if (!review) {
      return NextResponse.json(
        { message: "Review not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ review });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

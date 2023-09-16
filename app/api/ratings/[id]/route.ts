import connect from "@/database/database";
import Rating from "@/models/Rating";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ratingId = params.id;

    const rating = await Rating.findById({ _id: ratingId }).populate("gig_id");

    if (!rating) {
      return NextResponse.json(
        { message: "Rating not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ rating });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ratingId = params.id;
    const rating = await request.json();
    const updatedRating = await Rating.findByIdAndUpdate(
      { _id: ratingId },
      rating,
      {
        new: true,
      }
    );

    if (!updatedRating) {
      return NextResponse.json(
        { message: "Rating not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "rating Updated",
      task: updatedRating,
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
    const ratingId = params.id;

    const rating = await Rating.findByIdAndDelete({ _id: ratingId });
    if (!rating) {
      return NextResponse.json(
        { message: "Rating not found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ rating });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

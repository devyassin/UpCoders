import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Gig from "@/models/Gig";
import { GigType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const gigId = params.id;

    const gig = await Gig.findById({ _id: gigId });
    if (!gig) {
      return NextResponse.json({ message: "Gig not found !" }, { status: 404 });
    }

    return NextResponse.json({ gig });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const gigId = params.id;
    const gig = await request.json();
    const updatedGig = await Gig.findByIdAndUpdate({ _id: gigId }, gig, {
      new: true,
    });
    if (!updatedGig) {
      return NextResponse.json({ message: "Gig not found !" }, { status: 404 });
    }

    return NextResponse.json({ message: "gig Updated", gig: updatedGig });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const gigId = params.id;

    const gig = await Gig.findByIdAndDelete({ _id: gigId });
    if (!gig) {
      return NextResponse.json({ message: "Gig not found !" }, { status: 404 });
    }

    return NextResponse.json({ gig });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Favourite from "@/models/Favourites";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const favouriteId = params.id;

    const favourite = await Favourite.findById({ _id: favouriteId });
    if (!favourite) {
      return NextResponse.json({ message: "Favourite not found !" }, { status: 404 });
    }

    return NextResponse.json({ favourite });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const favouriteId = params.id;

    const favourite = await Favourite.findByIdAndDelete({ _id: favouriteId });
    if (!favourite) {
      return NextResponse.json({ message: "Favourite not found !" }, { status: 404 });
    }

    return NextResponse.json({ favourite });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

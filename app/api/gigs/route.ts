import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Favourite from "@/models/Favourites";
import Gig from "@/models/Gig";
import { GigType } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    // Fetch all gigs that note owned by the logged user
    const allGigs = await Gig.find({ user_id: { $ne: userId } }).populate(
      "user_id"
    );

    // Fetch the list of favorites for the current user
    const userFavorites = await Favourite.find({ user_id: userId });

    // Create an array of gig IDs that are favorites
    const favoriteGigIds = userFavorites.map((favorite) =>
      favorite.gig_id.toString()
    );

    // Determine which gigs are favorites
    const gigsWithFavorites = allGigs.map((gig) => ({
      ...gig.toObject(),
      isFavorite: favoriteGigIds.includes(gig._id.toString()),
    }));

    return NextResponse.json({
      size: gigsWithFavorites.length,
      gigs: gigsWithFavorites,
    });
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

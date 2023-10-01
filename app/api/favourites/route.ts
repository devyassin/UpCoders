import connect from "@/database/database";
import { compareUserId, getDataFromToken } from "@/helpers/GetDataFromToken";
import Favourite from "@/models/Favourites";
import Gig from "@/models/Gig";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const favourites = await Favourite.find({ user_id: userId }).populate({
      path: "gig_id",
      populate: {
        path: "user_id", // The field  to populate inside the gig_id object
        model: "User", // The model to use for populating user_id
      },
    });

    return NextResponse.json({
      size: favourites.length,
      favourites: favourites,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const favourite = await request.json();

    // Check if the referenced gig exists in the database
    const gigIsExict = await Gig.findOne({
      _id: favourite.gig_id,
    });

    if (!gigIsExict) {
      return NextResponse.json({ message: "Gig not found !" }, { status: 401 });
    }

    // Check if the user is trying to add their own gig to favorites
    const isGigBelongToCurrentUser = await Gig.findOne({
      user_id: favourite.user_id,
      _id: favourite.gig_id,
    });

    if (isGigBelongToCurrentUser) {
      return NextResponse.json(
        { message: "u can't add ur own gigs to favourites !" },
        { status: 401 }
      );
    }
    // Check if the gig is already in the user's favorites
    const gigIsAlreadyInFavourites = await Favourite.findOne({
      user_id: favourite.user_id,
      gig_id: favourite.gig_id,
    });

    if (gigIsAlreadyInFavourites) {
      return NextResponse.json(
        { message: "Gig already exict in favourites !" },
        { status: 401 }
      );
    }

    const sameUser = await compareUserId(request, favourite.user_id);
    if (!sameUser) {
      return NextResponse.json(
        { message: "not the same user !" },
        { status: 401 }
      );
    }
    const newFavourite = new Favourite(favourite);
    const savedFavourtie = await newFavourite.save();

    return NextResponse.json({
      message: "favourite created",
      favourite: savedFavourtie,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

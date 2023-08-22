import { getDataFromToken } from "@/helpers/GetDataFromToken";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { createNextRouteHandler } from "uploadthing/next";
import { utapi } from "uploadthing/server";
import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

// Update the user profile picture

export async function PATCH(request: NextRequest, response: NextResponse) {
  try {
    const userId = await getDataFromToken(request);
    const newPicture = await request.json();
    // Define the new picture properties

    const userObj = await User.findById({ _id: userId });

    if (userObj?.picture?.fileKey) {
      await utapi.deleteFiles(userObj?.picture?.fileKey);
    }
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      { $set: { picture: newPicture } }
    ).select("-password");

    return NextResponse.json({
      message: "User Profile picture Updated",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

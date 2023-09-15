import connect from "@/database/database";
import { APIFeatures, FromUrlToObject } from "@/helpers/ApiHelpers";
import User from "@/models/User";

import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(req: NextRequest) {
  try {
    const queryReq = FromUrlToObject(req);

    // EXECUTE QUERY
    const features = new APIFeatures(User, queryReq)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const users = await features.query;
    // .aggregate([
    //   {
    //     $group: {
    //       _id: "$type",
    //       num: { $sum: 1 },
    //       minHourlyRate: { $min: "$hourlyRate" },
    //     },
    //   },
    // ]);
  
    if (!users) {
      return NextResponse.json({ error: "Users Not Found" });
    }
    return NextResponse.json({ results: users.length, data: users });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong. Please try again!",
    });
  }
}

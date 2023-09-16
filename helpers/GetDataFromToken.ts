import { NextRequest, NextResponse } from "next/server";
import { verify } from "@/helpers/jwt_sign_verify";
import { Types } from "mongoose";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken: any = await verify(token, process.env.JWT_SECRET_KEY!);

    return decodedToken.payload.userId;
  } catch (error: any) {
    throw new Error("You are not authorized Please login!");
  }
};

export const compareUserId = async (
  request: NextRequest,
  id: Types.ObjectId
) => {
  try {
    const userId = await getDataFromToken(request);

    if (id !== userId) {
      return false;
    }
    return true;
  } catch (error: any) {
    throw new Error("You are not authorized Please login!");
  }
};

import { NextRequest } from "next/server";
import { verify } from "@/helpers/jwt_sign_verify";

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken: any = await verify(token, process.env.JWT_SECRET_KEY!);
   
    return decodedToken.payload.userId;
  } catch (error: any) {
    throw new Error("You are not authorized Please login!");
  }
};

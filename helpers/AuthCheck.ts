import { NextRequest } from "next/server";

export const AuthCheck = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    if (!token) return false;

    return true;
  } catch (error: any) {
    return false;
  }
};

import { NextResponse, NextRequest } from "next/server";

import { verify } from "@/helpers/jwt_sign_verify";

export async function middleware(request: NextRequest) {
  let path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/signin" || path === "/signup" || path === "/welcome";
  const excludedEndpoints = ["/api/logout", "/api/signin", "/api/signup"];

  const token = request.cookies.get("token")?.value || "";
  const secretKey = process.env.JWT_SECRET_KEY!;

  if (!path.startsWith("/api")) {
    if (isPublicPath && token) {
      try {
        await verify(token, secretKey);
        return NextResponse.redirect(new URL("/", request.nextUrl));
      } catch (error) {}
    }

    // that will run if the user is already complited his profile and trying to access the complete Profile page again
    if (path == "/completeProfile") {
      try {
        const {
          payload: { isCompleted, type },
        }: any = await verify(token, secretKey);

        console.log(isCompleted);
        console.log(type);

        if (type == "freelancer" && isCompleted == true) {
          return NextResponse.redirect(new URL("/", request.nextUrl));
        }
      } catch (error) {}
    }

    // that condition will run if the user as type freelancer not complited his registration
    if (path == "/") {
      try {
        const {
          payload: { isCompleted, type },
        }: any = await verify(token, secretKey);

        if (type == "freelancer" && isCompleted == false) {
          console.log("correct");
          return NextResponse.redirect(
            new URL("/completeProfile", request.nextUrl)
          );
        }
      } catch (error) {
        return NextResponse.redirect(new URL("/welcome", request.nextUrl));
      }
    }

    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL("/welcome", request.nextUrl));
    }
  }

  if (path.startsWith("/api") && !excludedEndpoints.includes(path)) {
    try {
      await verify(token, secretKey);
    } catch (error) {
      return NextResponse.json(
        {
          message: "You are not authorized . Please login!",
        },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/api/:path*"],
};

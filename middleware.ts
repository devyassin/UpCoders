import { NextResponse, NextRequest } from "next/server";
import { AuthCheck } from "@/helpers/AuthCheck";

const ProtectedRoutes = () => {};

export async function middleware(request: NextRequest) {
  let path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/signin" || path === "/signup" || path === "/welcome";
  const excludedEndpoints = ["/api/logout", "/api/signin", "/api/signup"];

  const token = request.cookies.get("token")?.value || "";
  const type = request.cookies.get("type")?.value || "";
  const isComplited = request.cookies.get("isComplited")?.value || "";

  if (!path.startsWith("/api")) {
    if (isPublicPath && token) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // that will run if the user is already complited his profile and trying to access the complete Profile page again
    if (path == "/completeProfile" && isComplited == "true") {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // that condition will run if the user as type freelancer not complited his registration
    if (path == "/") {
      if (type == "freelancer" && isComplited == "false") {
        return NextResponse.redirect(
          new URL("/completeProfile", request.nextUrl)
        );
      }
    }

    if (!isPublicPath && !token) {
      return NextResponse.redirect(new URL("/welcome", request.nextUrl));
    }
  }

  if (path.startsWith("/api") && !excludedEndpoints.includes(path)) {
    const isAuthenticated = AuthCheck(request);

    if (!isAuthenticated) {
      return NextResponse.json(
        {
          error: "You are not authorized . Please login!",
        },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/api/:path*"],
};

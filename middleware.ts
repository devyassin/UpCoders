import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/signin" || path === "/signup" || path === "/welcome";

  const token = request.cookies.get("token")?.value || "";
  const type = request.cookies.get("type")?.value || "";
  const isComplited = request.cookies.get("isComplited")?.value || "";

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

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

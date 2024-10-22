import { NextResponse } from "next/server";
import { getUrl } from "./lib/get-url";

const isAuthRoute = ["/auth", "/auth/signin"];

export function middleware(request) {
  const token = request.cookies.get("authjs.session-token");
  const pathname = request.nextUrl.pathname;

  if (pathname.includes(isAuthRoute) && token) {
    return NextResponse.redirect(new URL(getUrl("/app")));
  }

  if (pathname.includes("/app") && !token) {
    return NextResponse.redirect(new URL(getUrl("/auth/signin")));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

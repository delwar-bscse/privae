import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "./utils/getToken";
import { myFetch } from "./utils/myFetch";
import { EUserRole } from "./enums/userEnums";
import { deleteCookie } from "cookies-next/client";


 
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
 
  const isPublicPath = [
    "/login",
    "/privacy-policy",
    "/terms-condition",
  ].includes(path);
 
  const token = await getToken();
 
  
  if (!isPublicPath && !token) {
    const loginUrl = new URL("/login", request.nextUrl);
    loginUrl.searchParams.set("callbackUrl", path);
    return NextResponse.redirect(loginUrl);
  }
 
  
  if (token && !isPublicPath) {
    const res = await myFetch("/user/profile");
    const userRole = res?.data?.role;
 
    if (userRole !== EUserRole.SUPER_ADMIN) {
      deleteCookie('accessToken');
      deleteCookie('userRole');
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }
}
 
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
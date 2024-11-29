import {withAuth} from "@kinde-oss/kinde-auth-nextjs/middleware";
export default function middleware(req) {
  return withAuth(req);
}
export const config = {
  matcher: [
    // "/admin",
    // "/((?!api|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)"
  ]
};
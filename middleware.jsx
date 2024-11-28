// middleware.jsx (for Next.js 13+)

import { NextResponse } from 'next/server';
import { verifySession } from '@kinde-oss/kinde-auth-nextjs';  // Hypothetical method to verify session

export function middleware(request) {
  // Check if the session exists or if the user is authenticated
  const session = verifySession(request); // Example, use actual method from Kinde or similar authentication provider
  
  if (session) {
    // If the user is authenticated, you can add user info to the response headers
    const response = NextResponse.next();
    response.headers.set('X-User-Name', session.user.name);  // Example: Set user name in the headers
    return response;
  } else {
    // If the user is not authenticated, you can redirect them to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Optional: Apply middleware only to certain paths
export const config = {
  matcher: ['/dashboard', '/profile'],  // Protect these routes
};


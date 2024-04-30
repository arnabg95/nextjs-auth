import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = await auth() as any
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('Authorization', `Bearer ${session?.user?.access}`)
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

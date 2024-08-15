import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

// teste

export function middleware(request: NextRequest) {
  const cookie = cookies().get('auth-token')?.value

  //const header = request.headers.has('Authorization')
  //const requestHeaders = new Headers(request.headers)
  //console.log(header)

  if(request.nextUrl.pathname.startsWith("/home") && !cookie) {
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: [
    "/home-resus/:path*",
    "/home-ies/:path*",
    "/home-neps/:path*"
  ]
}
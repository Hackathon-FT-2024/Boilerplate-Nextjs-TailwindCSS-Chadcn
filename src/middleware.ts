import { isLoggedIn } from "@/utils/session";

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // const token = request.cookies.get('token');
    console.log("is logged in? ", isLoggedIn)

    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}
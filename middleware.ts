import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  
  const publicPaths = ['/sign-in', '/sign-up'];

 
  if (
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname.startsWith('/assets') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  
  const session = request.cookies.get('appwrite-session');

 
  if (session && publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  
  if (!session && !publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  
  return NextResponse.next();
}


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};

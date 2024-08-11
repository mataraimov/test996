import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { companies } from './utils/lib/mockCompanies';

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  if (
    pathname === '/' ||
    pathname.startsWith('/marketplace') ||
    pathname.startsWith('/404') ||
    searchParams.has('name')
  ) {
    return NextResponse.next();
  }

  const companyNumberPattern = /^\/(0\d{9})$/;
  const match = pathname.match(companyNumberPattern);

  if (match) {
    const companyNumber = match[1];

    const company = companies.find((company) => company.number === companyNumber);

    if (!company) {
      const url = new URL('/marketplace', req.url);
      url.searchParams.set('error', 'Company not found');
      return NextResponse.redirect(url);
    }

    const redirectUrl = new URL(`/${company.number}`, req.url);
    redirectUrl.searchParams.set('name', company.name);
    redirectUrl.searchParams.set('description', company.description);
    return NextResponse.redirect(redirectUrl);
  } else if (pathname.startsWith('/0')) {
    const url = new URL('/marketplace', req.url);
    url.searchParams.set('error', 'Invalid company number format');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|marketplace|404).*)'],
};

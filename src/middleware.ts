import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { companies } from './utils/lib/mockCompanies'; // Import the mock companies

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Skip processing for the root, marketplace, 404, and paths that have already been redirected
  if (
    pathname === '/' ||
    pathname.startsWith('/marketplace') ||
    pathname.startsWith('/404') ||
    searchParams.has('name')
  ) {
    return NextResponse.next();
  }

  // Regular expression to match a Kyrgyzstan phone number pattern
  const companyNumberPattern = /^\/(0\d{9})$/;
  const match = pathname.match(companyNumberPattern);

  if (match) {
    const companyNumber = match[1];

    // Find the company details from the mock list
    const company = companies.find((company) => company.number === companyNumber);

    if (!company) {
      // Redirect to marketplace if company number doesn't exist
      const url = new URL('/marketplace', req.url);
      url.searchParams.set('error', 'Company not found');
      return NextResponse.redirect(url);
    }

    // Redirect to the company page with company data in query params
    const redirectUrl = new URL(`/${company.number}`, req.url);
    redirectUrl.searchParams.set('name', company.name);
    redirectUrl.searchParams.set('description', company.description);
    return NextResponse.redirect(redirectUrl);
  } else if (pathname.startsWith('/0')) {
    // Redirect to marketplace if the path starts with a number but doesn't match the correct pattern
    const url = new URL('/marketplace', req.url);
    url.searchParams.set('error', 'Invalid company number format');
    return NextResponse.redirect(url);
  }

  // For all other paths, proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|marketplace|404).*)'],
};

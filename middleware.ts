import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/roadmap',
  '/get-started',
  '/mailing-list',
  '/demo/ai',
  '/demo/upload',
  '/api/supabase-status',
  '/api/sendgrid/inbound'
]

// Create a custom middleware that checks for Clerk environment variables
export default clerkMiddleware(async (auth, request) => {
  const url = new URL(request.url)
  const path = url.pathname

  // Allow public routes without authentication
  if (publicRoutes.some(route => path === route || path.startsWith(route + '/'))) {
    return NextResponse.next()
  }

  // Check for Clerk environment variables on protected routes
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    console.error('Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable. Please add it to your .env file.')
    return new NextResponse('Authentication not configured. Please set up Clerk environment variables.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
  
  // For protected routes, use Clerk's auth middleware
  const authObject = await auth()
  if (!authObject.userId) {
    return authObject.redirectToSignIn({ returnBackUrl: request.url })
  }
  
  return NextResponse.next()
}, {
  debug: process.env.NODE_ENV === 'development'
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
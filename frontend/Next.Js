/* *******************************************************************************************
 * NEXT.JS 16
 * VERSION: 16 (App Router)
 * DOCUMENTATION: https://nextjs.org/docs
 * ******************************************************************************************* */

/*
 * Available Rendering Strategies
 * --------------------
 * static:   Build‑time generated (default for Server Components)
 * dynamic:  Server‑rendered on demand
 * isr:      Incremental Static Regeneration (time‑based or on‑demand)
 * ppr:      Partial Prerendering (static shell + dynamic holes)
 * edge:     Edge runtime (lightweight, global)
 * nodejs:   Node.js runtime (default)
 */

/* *******************************************************************************************
 * ROUTING
 * ******************************************************************************************* */

/*
 * File Conventions
 * --------------------
 * Special files that create pages, layouts and other route segments inside `app/`.
 */

.page             /* page.tsx – a route’s UI (the page component) */
.layout           /* layout.tsx – shared wrapper that persists across navigations */
.loading          /* loading.tsx – instant loading state shown while a route loads */
.error            /* error.tsx – error boundary for a segment and its children */
.not-found        /* not-found.tsx – custom 404 page for the segment */
.template         /* template.tsx – re‑mounted layout on every navigation */
.default          /* default.tsx – fallback for parallel routes */
.route            /* route.ts – API endpoint (exports GET, POST, PUT, etc.) */
.middleware       /* middleware.ts – runs before a request is completed */
.instrumentation  /* instrumentation.ts – registers lifecycle hooks for observability */

/*
 * Dynamic Routes
 * --------------------
 * Use brackets to create dynamic segments that match URL parameters.
 */

.[slug]           /* app/blog/[slug]/page.tsx – matches /blog/hello-world */
.[...slug]        /* app/docs/[...slug]/page.tsx – catch‑all (e.g., /docs/a/b) */
.[[...slug]]      /* app/docs/[[...slug]]/page.tsx – optional catch‑all (matches /docs as well) */

/*
 * Route Groups
 * --------------------
 * Group routes logically without affecting the URL structure.
 */

.(group)          /* app/(marketing)/page.tsx – groups routes; URL remains / */

/*
 * Parallel Routes
 * --------------------
 * Render multiple pages simultaneously in the same layout.
 */

.@slot            /* app/@sidebar/page.tsx – named slot rendered in layout using {sidebar} */

/*
 * Intercepting Routes
 * --------------------
 * Override a route while keeping the context of the current page.
 */

.(.)folder        /* app/(.)folder – intercept same level */
.(..)folder       /* app/(..)folder – intercept one level up */
.(...)folder      /* app/(...)folder – intercept from the root */
.()folder         /* app/()folder – intercept to a different segment */

/* *******************************************************************************************
 * CLIENT & SERVER COMPONENTS
 * ******************************************************************************************* */

/*
 * Directive
 * --------------------
 * Mark the boundary between Server and Client Components.
 */

.'use client'     /* "use client" – marks a component as a Client Component */
.'use server'     /* "use server" – marks a function as a Server Action */

/*
 * Server Components (default)
 * --------------------
 * All components in `app/` are Server Components unless marked otherwise.
 */

.server           /* async function – can directly access data sources, keep secrets */
.suspense         /* <Suspense> – stream chunks of UI as they become ready */

/*
 * Client Components
 * --------------------
 * Rendered on the server and hydrated on the client.
 */

.client           /* "use client" boundary – use browser APIs, state, effects */
.interactive      /* onClick, useState, useEffect, etc. work inside Client Components */

/* *******************************************************************************************
 * DATA FETCHING & CACHING
 * ******************************************************************************************* */

/*
 * Fetch API
 * --------------------
 * Extended fetch in Server Components for caching and revalidation.
 */

.cache-force       /* fetch(url, { cache: 'force-cache' }) – cache indefinitely */
.cache-no-store    /* fetch(url, { cache: 'no-store' }) – dynamic, no caching */
.revalidate        /* fetch(url, { next: { revalidate: 3600 } }) – ISR every hour */
.tags              /* fetch(url, { next: { tags: ['collection'] } }) – on‑demand revalidation */

/*
 * Cache Functions
 * --------------------
 * Utilities for memoizing data and full‑route caching.
 */

.cache             /* unstable_cache – wrap a function to cache its result */
.revalidateTag     /* revalidateTag('collection') – purge cached data by tag */
.revalidatePath    /* revalidatePath('/blog') – purge a full route from cache */

/* *******************************************************************************************
 * COMPONENTS & APIs
 * ******************************************************************************************* */

/*
 * Routing Hooks
 * --------------------
 * Only available in Client Components.
 */

.useRouter          /* useRouter() – access the router object (push, replace, refresh) */
.usePathname        /* usePathname() – read the current URL's pathname */
.useSearchParams    /* useSearchParams() – read query string parameters */

/*
 * Layout & Metadata
 * --------------------
 * Export special functions from layouts and pages.
 */

.generateMetadata   /* generateMetadata() – dynamic page metadata (title, description) */
.generateViewport   /* generateViewport() – control viewport meta tag */
.generateStaticParams /* generateStaticParams() – pre‑define dynamic segments for static generation */
.PPR                 /* experimental_ppr: true – enable Partial Prerendering for a layout */

/*
 * Next.js Components
 * --------------------
 * Optimised components provided by the framework.
 */

.Image              /* next/image – automatic lazy loading, responsive sizes, modern formats */
.Link               /* next/link – client‑side transitions with prefetching */
.Script             /* next/script – priority loading strategies for third‑party scripts */

/*
 * Font & Image Optimization
 * --------------------
 * Built‑in support for fonts and images.
 */

.next/font/google   /* import { Inter } from 'next/font/google' – subset, display swap */
.next/font/local    /* import localFont from 'next/font/local' – self‑hosted fonts */
.remotePatterns     /* images.remotePatterns – allow external image sources */

/*
 * Cookies, Headers & Server Utilities
 * --------------------
 * Read request data in Server Components and Route Handlers.
 */

.cookies            /* cookies() – read/write cookies (Server) */
.headers            /* headers() – read request headers (Server) */
.redirect           /* redirect() – server‑side redirect */
.notFound           /* notFound() – trigger the nearest not‑found boundary */

/* *******************************************************************************************
 * CONFIGURATION
 * ******************************************************************************************* */

/*
 * next.config
 * --------------------
 * Customise the Next.js build and runtime.
 */

.reactStrictMode    /* reactStrictMode: true – enable React Strict Mode */
.images             /* images: { domains: [...] } – configure image optimisation */
.experimental       /* experimental: { ppr: true } – enable Partial Prerendering */
.output             /* output: 'standalone' – self‑contained build */
.runtime            /* runtime: 'edge' – deploy to Edge Runtime globally */

/*
 * Middleware
 * --------------------
 * Intercept requests before they hit the route handler.
 */

.middleware         /* middleware.ts – runs on every request (rewrites, redirects, auth) */
.matcher            /* config.matcher – filter paths where middleware runs */

/*
 * Environment Variables
 * --------------------
 * Load environment variables for server and client.
 */

.NEXT_PUBLIC_       /* NEXT_PUBLIC_* – exposed to the browser */

/* *******************************************************************************************
 * OPTIMISATIONS
 * ******************************************************************************************* */

/*
 * Streaming & Suspense
 * --------------------
 * Improve perceived performance with streaming HTML.
 */

.loading.tsx        /* Automatic loading state for route segments */
.suspense           /* <Suspense fallback={...}> – stream content as it resolves */

/*
 * Static & Dynamic Rendering
 * --------------------
 * Control how a route is generated.
 */

.force-static       /* export const dynamic = 'force-static' – always static */
.force-dynamic      /* export const dynamic = 'force-dynamic' – always dynamic */
.revalidate-segment /* export const revalidate = 60 – ISR every 60 seconds */
.dynamicParams      /* export const dynamicParams = false – 404 unknown dynamic params */

/*
 * Partial Prerendering (PPR)
 * --------------------
 * Combine static and dynamic content in the same page.
 */

.ppr                /* experimental_ppr: true – enable PPR per layout */
.fallback           /* <Suspense fallback={...}> – placeholder for dynamic hole */

/*
 * Analytics & DevTools
 * --------------------
 * Built‑in speed insights and development tools.
 */

.SpeedInsights      /* @vercel/speed-insights/next – performance monitoring */
.NextDevtools       /* <NextDevtools> – inline development tools */

/* *******************************************************************************************
 * API ROUTES
 * ******************************************************************************************* */

/*
 * Route Handlers
 * --------------------
 * Create RESTful endpoints inside `app/api`.
 */

.GET                /* export async function GET(request) – handle GET */
.POST               /* export async function POST(request) – handle POST */
.PUT                /* export async function PUT(request) – handle PUT */
.PATCH              /* export async function PATCH(request) – handle PATCH */
.DELETE             /* export async function DELETE(request) – handle DELETE */
.OPTIONS            /* export async function OPTIONS(request) – handle OPTIONS */

/*
 * Request Helpers
 * --------------------
 * Parse request body, query, and parameters.
 */

.json               /* await request.json() – parse JSON body */
.formData           /* await request.formData() – parse form data */
.params             /* { params } – access dynamic route params */
.searchParams       /* { searchParams } – access query parameters */

/* *******************************************************************************************
 * STYLING
 * ******************************************************************************************* */

/*
 * CSS Modules & Global Styles
 * --------------------
 * Scoped and global styling solutions.
 */

.module.css         /* import styles from './style.module.css' – scoped CSS */
.global.css         /* import './globals.css' – global styles */

/*
 * Tailwind CSS
 * --------------------
 * Built‑in support for utility‑first CSS.
 */

.tailwind           /* npx create-next-app --tailwind – automatic setup */
.postcss            /* postcss.config.js – customise PostCSS pipeline */

/*
 * CSS‑in‑JS (Client)
 * --------------------
 * Runtime styling libraries work inside Client Components.
 */

.styled             /* styled‑components, Emotion – use inside "use client" */

/* *******************************************************************************************
 * DEPLOYMENT
 * ******************************************************************************************* */

/*
 * Platforms
 * --------------------
 * Deploy anywhere with zero‑config or minimal settings.
 */

.vercel             /* Vercel – one‑click deploy, edge functions, analytics */
.node               /* Node.js server – `next start` after build */
.docker             /* Docker – use `output: 'standalone'` */
.static             /* `output: 'export'` – fully static HTML export */

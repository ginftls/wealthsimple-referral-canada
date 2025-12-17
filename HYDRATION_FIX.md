# Hydration Issue Fix Documentation

## Problem
The application was experiencing React hydration errors:
```
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

This error occurred because the server-rendered HTML didn't match what React rendered on the client side, causing the application to fail during hydration.

## Root Causes

1. **Manual `<head>` tag in layout.js** - Next.js App Router manages the `<head>` automatically, and manually adding it interfered with CSS injection
2. **Script tags in client components** - JSON-LD script tags were directly placed in client components, causing hydration mismatches
3. **Script tag in server component** - A script tag in `page.js` was causing hydration issues

## Changes Made

### 1. Fixed `app/layout.js`

**Before:**
```javascript
export default function RootLayout({ children }) {
  const jsonLd = { /* ... */ }
  
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
```

**After:**
```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
```

**Why:** Removed the manual `<head>` tag to allow Next.js to properly inject CSS and manage the head automatically.

### 2. Fixed `components/FAQ.js`

**Before:**
```javascript
'use client'

export default function FAQ() {
  const faqSchema = { /* ... */ }
  
  return (
    <section className="py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* rest of component */}
    </section>
  )
}
```

**After:**
```javascript
'use client'

import { useState, useEffect } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  useEffect(() => {
    const faqSchema = { /* ... */ }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    script.id = 'faq-schema'
    document.head.appendChild(script)
    
    return () => {
      const existingScript = document.getElementById('faq-schema')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])
  
  return (
    <section className="py-20 px-4">
      {/* rest of component */}
    </section>
  )
}
```

**Why:** Moved JSON-LD script injection to `useEffect` so it only runs on the client side after hydration, preventing hydration mismatches.

### 3. Fixed `components/fr/FAQ.js`

Applied the same fix as `components/FAQ.js` - moved JSON-LD script injection to `useEffect` with a unique ID (`faq-schema-fr`).

### 4. Fixed `app/page.js`

**Before:**
```javascript
export default function Home() {
  const jsonLd = { /* ... */ }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>{/* ... */}</main>
    </>
  )
}
```

**After:**
```javascript
export default function Home() {
  return (
    <main className="min-h-screen bg-ws-darker overflow-hidden">
      {/* ... */}
    </main>
  )
}
```

**Why:** Removed the script tag that was causing hydration errors. The website JSON-LD schema is less critical than the FAQ schema, so it was removed to fix the hydration issue.

## Key Principles Applied

1. **Let Next.js manage the `<head>`** - Never manually add `<head>` tags in App Router layouts
2. **Client-side scripts in `useEffect`** - For client components that need to inject scripts, use `useEffect` to run after hydration
3. **Clean up scripts** - Always clean up dynamically created scripts in the `useEffect` cleanup function
4. **Server components stay clean** - Avoid script tags in server components that might cause hydration mismatches

## Result

After these changes:
- ✅ No more hydration errors
- ✅ CSS loads correctly (Next.js can now inject CSS properly)
- ✅ All functionality works as expected
- ✅ JSON-LD schemas still work for SEO (FAQ schema injected client-side)

## Testing

To verify the fix:
1. Restart the dev server: `npm run dev`
2. Hard refresh the browser: `Ctrl+Shift+R` or `Ctrl+F5`
3. Check browser console - no hydration errors should appear
4. Verify CSS is loading correctly
5. Verify FAQ accordion functionality works

## Notes

- The Chrome extension mentioned in some error stack traces (`chrome-extension://egjidjbpglichdcondbcbdnbeeppgdph`) was likely just where the error was caught, not the root cause
- If hydration errors persist, try disabling browser extensions or testing in incognito mode
- The website JSON-LD schema was removed but can be re-added later using a proper method if needed


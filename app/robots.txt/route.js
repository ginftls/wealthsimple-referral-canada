export async function GET() {
  const robots = `User-agent: *
Allow: /
Sitemap: https://wealthsimple-referral-canada.vercel.app/sitemap.xml

# SEO Directives
Disallow: /api/
Disallow: /_next/
Host: https://wealthsimple-referral-canada.vercel.app`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600'
    },
  })
}
